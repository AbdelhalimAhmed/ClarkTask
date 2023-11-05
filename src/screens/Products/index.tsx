import { useNavigation } from '@react-navigation/native';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { RootStackParamList } from '../../navigation/RootNavigator';
import ROUTES from '../../navigation/routes';

type ProductsProps = NativeStackScreenProps<RootStackParamList, 'Products'>;

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Products() {
  const { navigate } = useNavigation<ProductsProps['navigation']>();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header />
      <View
        style={{
          backgroundColor: Colors.white,
        }}>
        <Section title="Step One">
          Edit{' '}
          <Text
            onPress={() =>
              navigate(ROUTES.PRODUCTS_DETAILS, {
                productId: 'wwewewewe',
                productName: 'Hello',
              })
            }
            style={styles.highlight}>
            Products.tsx
          </Text>{' '}
          to change this screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
        <LearnMoreLinks />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Products;
