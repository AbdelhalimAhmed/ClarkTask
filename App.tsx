import React from 'react';

import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/attributes/theme';
import RootNavigator from './src/navigation/RootNavigator';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer
      theme={isDarkMode ? theme.darkTheme : theme.defaultTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
