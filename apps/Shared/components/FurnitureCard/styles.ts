import { StyleSheet } from 'react-native';
import { Fonts } from '@root/Shared/styles/fonts';
import { theme } from '@root/Shared/styles/theme';

const CONTAINER_WIDTH = 182;

export const styles = StyleSheet.create({
  root: {
    position: 'relative',
    marginTop: 50,
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 16,
    width: CONTAINER_WIDTH,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: theme.separator,
    gap: 32,
    boxShadow: '0px 4px 14px -7px #00000040',
  },
  content: {
    gap: 8,
  },
  titleText: {
    fontSize: 16,
    fontFamily: Fonts.Inter700,
    fontWeight: 700,
  },
  descriptionText: {
    fontSize: 10,
    fontFamily: Fonts.Inter400,
    fontWeight: 400,
    opacity: 0.5,
  },
  cardImage: {
    position: 'absolute',
    top: (100 / 2) * -1,
    left: 15,
    width: CONTAINER_WIDTH - 32,
    height: 100,
    borderRadius: 8,
    backgroundColor: theme.separator,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueText: {
    fontSize: 16,
    fontFamily: Fonts.Inter700,
    fontWeight: 700,
  },
  rate: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  rateIcon: {
    width: 11,
    height: 11,
  },
  manageContainer: {
    position: 'absolute',
    bottom: -16,
    alignItems: 'center',
    width: CONTAINER_WIDTH,
  },
  manageButton: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cart: {
    borderRadius: 6,
    flexDirection: 'row',
  },
  cartManage: {
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 30,
  },
  manageText: {
    color: theme.white,
    fontFamily: Fonts.Inter700,
    fontWeight: 700,
  },
});
