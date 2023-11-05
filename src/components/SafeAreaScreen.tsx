import { useTheme } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { View, StyleSheet, StatusBar, useColorScheme } from 'react-native';

interface SafeAreaScreenProps {
  children: ReactNode;
}

const SafeAreaScreen: React.FC<SafeAreaScreenProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

export default SafeAreaScreen;
