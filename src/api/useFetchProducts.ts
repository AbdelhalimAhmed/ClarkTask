import { useQuery } from '@tanstack/react-query';
import { useCallback, useRef, useState } from 'react';
import { slowLittleBit } from '../utils/MockFns';
import mapError, { ResponseError } from './mapError';
import { BASE_URL } from './constants';

export type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) {
    throw new ResponseError('Failed to fetch products', response);
  }
  return await response.json();
};

// custom hook for fetching products
const useFetchProducts = () => {
  const initialData = useRef<Product[]>();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['productsData'],
    queryFn: async () => {
      const products = await fetchProducts();
      initialData.current = products;
      return products;
    },
  });
  const [refreshing, setRefreshing] = useState(false);

  let onRefresh = useCallback(async () => {
    setRefreshing(true);
    //Simulating a delay in the request to mimic a slower response, even though the actual response is quite fast.
    await slowLittleBit();
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  return {
    isLoading,
    error: mapError(error),
    data,
    initialData: initialData.current,
    onRefresh,
    refreshing,
  };
};

export default useFetchProducts;
