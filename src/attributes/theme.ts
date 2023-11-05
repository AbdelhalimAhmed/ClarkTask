import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export default {
  defaultTheme: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#f50057',
    },
  },
  darkTheme: {
    ...DarkTheme,
  },
};
