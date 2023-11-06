import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../navigation/RootNavigator';
import ROUTES from '../../navigation/routes';
import useFetchProducts, { Product } from '../../api/useFetchProducts';
import { ProductList } from '../../components';
import styles from './styles';

type ProductsProps = NativeStackScreenProps<RootStackParamList, 'Products'>;

function Products() {
  const { navigate } = useNavigation<ProductsProps['navigation']>();
  const { isLoading, error, data, onRefresh, refreshing } = useFetchProducts();

  console.log(JSON.stringify({ isLoading, error, data, refreshing }, null, 2));

  if (isLoading || error) {
    return (
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator /> : <Text>Error</Text>}
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
