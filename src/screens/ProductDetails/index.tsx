import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

function Products() {
  const { params } = useRoute<Props['route']>();

  return (
    <View>
      <Text>{params?.productId ?? 'ssss'}</Text>
    </View>
  );
}

export default Products;
