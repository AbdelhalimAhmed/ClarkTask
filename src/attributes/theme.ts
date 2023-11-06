import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export default {
  defaultTheme: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0439d7',
    },
  },
  darkTheme: {
    ...DarkTheme,
  },
};
