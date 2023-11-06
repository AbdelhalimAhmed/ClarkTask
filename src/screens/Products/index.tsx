import React from 'react';
import {
  RefreshControl,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Header } from 'react-native/Libraries/NewAppScreen';

import { RootStackParamList } from '../../navigation/RootNavigator';
import useFetchProducts from '../../api/useFetchProducts';
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

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }>
      <Header />
      <View>
        <Text
          onPress={() => {
            navigate('ProductDetails', {
              productId: '222',
            });
          }}>
          Here we are
        </Text>
      </View>
    </ScrollView>
  );
}

export default Products;
