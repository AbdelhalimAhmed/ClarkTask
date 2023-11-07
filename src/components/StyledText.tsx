import React from 'react';
import { Text, TextProps } from 'react-native';
import { useCurrentTheme } from '../utils/customHooks';

const StyledText: React.FC<TextProps> = props => {
  const { colors } = useCurrentTheme();

  return <Text {...props} style={[props.style, { color: colors.text }]} />;
};

export default StyledText;
