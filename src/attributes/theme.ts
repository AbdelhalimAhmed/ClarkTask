import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

export type CustomTheme = {
  colors: {
    productCardBg: string;
  };
} & Theme;

export default {
  defaultTheme: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0439d7',
      productCardBg: '#FFF',
    },
  },
  darkTheme: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      productCardBg: '#000',
    },
  },
};
