import { StyleSheet } from 'react-native';
import { Fonts } from '@root/Shared/styles/fonts';
import { theme } from '@root/Shared/styles/theme';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    gap: 8,
  },
  mainAvatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  title: {
    gap: 4,
  },
  titleText: {
    fontFamily: Fonts.Inter700,
    fontSize: 13,
    fontWeight: 700,
    color: theme.white,
  },
  secondaryView: {
    position: 'relative',
    width: 22,
    height: 22,
    borderRadius: 4,
    overflow: 'hidden',
  },
  opacityView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.4,
    zIndex: 1,
  },
  secondaryAvatar: {
    width: '100%',
    height: '100%',
  },
  otherCountText: {
    position: 'absolute',
    top: 5,
    left: 4,
    color: theme.white,
    fontSize: 10,
    fontWeight: 500,
    fontFamily: Fonts.Inter500,
    zIndex: 2,
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
