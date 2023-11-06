import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { slowLittleBit } from '../utils/MockFns';

// custom hook for fetching products
const useFetchProducts = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['productsData'],
    queryFn: () =>
      fetch('https://fakestoreapi.com/products').then(res => res.json()),
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
    error,
    data,
    onRefresh,
    refreshing,
  };
};

export default useFetchProducts;
