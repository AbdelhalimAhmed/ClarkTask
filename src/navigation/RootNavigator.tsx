import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../screens/Products';
import ProductDetails from '../screens/ProductDetails';
import ROUTES from './routes';
import { useTheme } from '@react-navigation/native';

export type RootStackParamList = {
  Products: undefined;
  ProductDetails: { productId: string; productTitle?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator initialRouteName={ROUTES.PRODUCTS}>
      <Stack.Screen
        name={ROUTES.PRODUCTS}
        component={Products}
        options={{
          headerTitle: 'Product List',
          headerTintColor: colors.primary,
        }}
      />
      <Stack.Screen
        name={ROUTES.PRODUCTS_DETAILS}
        component={ProductDetails}
        options={({ route }) => ({
          headerTitle: route.params.productTitle ?? 'Product Details',
          headerBackTitleVisible: false,
          headerTintColor: colors.primary,
        })}
      />
    </Stack.Navigator>
  );
}
