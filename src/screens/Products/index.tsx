import React, { useLayoutEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { queryClient } from '../../../App';
import { RootStackParamList } from '../../navigation/RootNavigator';
import ROUTES from '../../navigation/routes';
import useFetchProducts, { Product } from '../../api/useFetchProducts';
import { ProductList } from '../../components';
import { debounce } from '../../utils/helper';
import styles from './styles';

type ProductsProps = NativeStackScreenProps<RootStackParamList, 'Products'>;

function Products() {
  const { navigate, setOptions } = useNavigation<ProductsProps['navigation']>();
  const { isLoading, error, data, onRefresh, refreshing, initialData } =
    useFetchProducts();

  console.log(JSON.stringify({ isLoading, error, data, refreshing }, null, 2));

  // used debounce here as a precaution for potential use of a search request API,
  // with the aim of minimizing the frequency of API calls.
  const searchProduct = debounce((text: string) => {
    const resultProducts = initialData?.filter(prod =>
      prod.title.toLowerCase().includes(text.toLowerCase()),
    );
    queryClient.setQueryData(['productsData'], resultProducts);
  }, 600);

  useLayoutEffect(() => {
    setOptions({
      headerSearchBarOptions: {
        onChangeText: e => searchProduct(e.nativeEvent.text),
      },
    });
  }, [searchProduct, setOptions]);

  if (isLoading || error) {
    return (
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator /> : <Text>{error}</Text>}
      </View>
    );
  }

  const handleProductPress = (item: Product) => {
    navigate(ROUTES.PRODUCTS_DETAILS, {
      productId: item.id,
      productTitle: item.title,
    });
  };

  return (
    <ProductList
      products={data}
      onProductPress={handleProductPress}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
}

export default Products;
