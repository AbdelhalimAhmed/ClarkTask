import React from 'react';
import { Text, StyleSheet, Pressable, Image, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { StyledText } from '../components';

import { Product } from '../api/useFetchProducts';
import { useCurrentTheme } from '../utils/customHooks';
import { spacing, borderRadius, fontSize } from '../attributes';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
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
    <AnimatedPressable
      key={product.id}
      onPress={handleCardPress}
      style={[styles.card, { backgroundColor: colors.productCardBg }]}
      entering={FadeInDown}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.details}>
        <StyledText style={styles.title} numberOfLines={3}>
          {product.title}
        </StyledText>
        <StyledText style={styles.priceTitle}>
          Price: <Text style={{ color: colors.primary }}>{product.price}$</Text>
        </StyledText>
      </View>
    </AnimatedPressable>
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
