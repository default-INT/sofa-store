import { StyleSheet } from 'react-native';
import { Fonts } from '@root/Shared/styles/fonts';
import { theme } from '@root/Shared/styles/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 16,
  },
  innerContainer: {
    marginHorizontal: 32,
  },
  userInfoContainer: {
    gap: 4,
  },
  userInfoText: {
    fontFamily: Fonts.Inter400,
    fontSize: 12,
    fontWeight: 400,
    color: theme.white,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    fontFamily: Fonts.Inter400,
    fontSize: 16,
    fontWeight: 400,
    color: theme.white,
  },
  priceText: {
    fontFamily: Fonts.Inter500,
    fontSize: 20,
    fontWeight: 500,
    color: theme.white,
  },
});
