import { useQuery } from '@tanstack/react-query';

export type ProductDetails = {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
};

// custom hook for fetching product details
const useFetchProductDetails = (productId: string) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['productsData', productId],
    queryFn: (): Promise<ProductDetails> =>
      fetch(`https://fakestoreapi.com/products/${productId}`).then(res =>
        res.json(),
      ),
  });

  return {
    isLoading,
    error,
    data,
  };
};

export default useFetchProductDetails;
