import { useQuery } from '@tanstack/react-query';
import mapError, { ResponseError } from './mapError';
import { BASE_URL } from './constants';

export type ProductDetails = {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
};

const fetchProductDetails = async (
  productId: string,
): Promise<ProductDetails> => {
  const response = await fetch(`${BASE_URL}/products/${productId}`);
  if (!response.ok) {
    throw new ResponseError('Failed to fetch product details', response);
  }
  return await response.json();
};

// custom hook for fetching product details
const useFetchProductDetails = (productId: string) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['productsData', productId],
    queryFn: () => fetchProductDetails(productId),
  });

  return {
    isLoading,
    error: mapError(error),
    data,
  };
};

export default useFetchProductDetails;
