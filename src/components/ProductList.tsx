import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { Product } from '../api/useFetchProducts';
import ProductCard from './ProductCard';
import spacing from '../attributes/spacing';

interface ProductListProps {
  products?: Product[];
  onProductPress: (item: Product) => void;
  onRefresh: () => Promise<void>;
  refreshing: boolean;
}

const EmptyList = () => (
  <View style={styles.noProductContainer}>
    <Text>No Products Found</Text>
  </View>
);

const ProductList: React.FC<ProductListProps> = ({
  products,
  onProductPress,
  onRefresh,
  refreshing,
}) => {

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductCard product={item} onProductPress={onProductPress} />
    ),
    [onProductPress],
  );

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
      ListEmptyComponent={<EmptyList />}
      contentContainerStyle={styles.contentContainerStyle}
      contentInsetAdjustmentBehavior={products?.length ? 'automatic' : 'never'}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    padding: spacing.s,
  },
  noProductContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default ProductList;
