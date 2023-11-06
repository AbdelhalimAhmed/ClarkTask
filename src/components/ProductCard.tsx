import React from 'react';
import { Text, StyleSheet, Pressable, Image, View } from 'react-native';
import { Product } from '../api/useFetchProducts';
import { spacing, borderRadius } from '../attributes';
import { useCurrentTheme } from '../utils/customHooks';
import fontSize from '../attributes/fontSize';

interface ProductCardProps {
  product: Product;
  onProductPress: (product: Product) => void;
}

const CARD_HEIGHT = 200;

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onProductPress,
}) => {
  const { colors } = useCurrentTheme();
  const handleCardPress = () => {
    onProductPress(product);
  };
  return (
    <Pressable
      onPress={handleCardPress}
      style={[styles.card, { backgroundColor: colors.productCardBg }]}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={3}>
          {product.title}
        </Text>
        <Text style={styles.priceTitle}>
          Price: <Text style={{ color: colors.primary }}>{product.price}$</Text>
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: spacing.xs,
    flex: 1,
    height: CARD_HEIGHT,
    borderRadius: borderRadius.m,
    padding: spacing.s,
    gap: spacing.m,
    overflow: 'hidden',
  },
  details: {
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: fontSize.m,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  priceTitle: {
    fontSize: fontSize.s,
    fontWeight: '600',
    flexWrap: 'wrap',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});

export default ProductCard;
