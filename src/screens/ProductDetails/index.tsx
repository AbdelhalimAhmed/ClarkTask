import React from 'react';
import { Text, View, ActivityIndicator, ScrollView, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import Animated, {
  FadeInRight,
  FadeInDown,
  FadeIn,
} from 'react-native-reanimated';

import { StyledText } from '../../components';
import { RootStackParamList } from '../../navigation/RootNavigator';
import useFetchProductDetails from '../../api/useFetchProductDetails';
import { useCurrentTheme } from '../../utils/customHooks';
import styles from './styles';

type ProductsDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;

function ProductDetails() {
  const { params } = useRoute<ProductsDetailsProps['route']>();
  const { isLoading, error, data } = useFetchProductDetails(params.productId);
  const { colors } = useCurrentTheme();

  if (isLoading || error) {
    return (
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator /> : <StyledText>{error}</StyledText>}
      </View>
    );
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="always"
      contentContainerStyle={styles.contentContainer}>
      {/* PRODUCT IMAGE */}
      {data?.image && (
        <Animated.View
          entering={FadeIn}
          style={[styles.imageContainer, { backgroundColor: colors.card }]}>
          <Image
            style={styles.image}
            source={{ uri: data.image }}
            resizeMode={'contain'}
          />
        </Animated.View>
      )}
      <Animated.View style={styles.details} entering={FadeInRight}>
        {/* PRODUCT TITLE */}
        <StyledText style={styles.name}>{data?.title}</StyledText>
        {/* PRODUCT PRICE */}
        <StyledText style={styles.price}>
          Price: <Text style={{ color: colors.primary }}>{data?.price}$</Text>
        </StyledText>
      </Animated.View>
      {/* PRODUCT DESCRIPTION */}
      <Animated.Text
        entering={FadeInDown}
        style={[
          styles.description,
          { backgroundColor: colors.card, color: colors.text },
        ]}>
        {data?.description}
      </Animated.Text>
    </ScrollView>
  );
}

export default ProductDetails;
