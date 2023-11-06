import { StyleSheet } from 'react-native';
import { spacing, fontSize } from '../../attributes';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    padding: spacing.m,
  },
  image: {
    height: 200,
  },
  contentContainer: {
    gap: spacing.xl,
  },
  details: {
    gap: spacing.m,
    paddingHorizontal: spacing.s,
  },
  name: {
    fontSize: fontSize.m,
    fontWeight: 'bold',
  },
  price: {
    fontSize: fontSize.m,
    fontWeight: '600',
  },
  description: {
    fontSize: fontSize.m,
    padding: spacing.s,
  },
});
