import React from 'react';
import { Text, View, ActivityIndicator, ScrollView, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';

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
        {isLoading ? <ActivityIndicator /> : <Text>Error</Text>}
      </View>
    );
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="always"
      contentContainerStyle={styles.contentContainer}>
      {/* PRODUCT IMAGE */}
      {data?.image && (
        <View style={[styles.imageContainer, { backgroundColor: colors.card }]}>
          <Image
            style={styles.image}
            source={{ uri: data.image }}
            resizeMode={'contain'}
          />
        </View>
      )}
      <View style={styles.details}>
        {/* PRODUCT TITLE */}
        <Text style={styles.name}>{data?.title}</Text>
        {/* PRODUCT PRICE */}
        <Text style={styles.price}>
          Price: <Text style={{ color: colors.primary }}>{data?.price}$</Text>
        </Text>
      </View>
      {/* PRODUCT DESCRIPTION */}
      <Text style={[styles.description, { backgroundColor: colors.card }]}>
        {data?.description}
      </Text>
    </ScrollView>
  );
}

export default ProductDetails;
