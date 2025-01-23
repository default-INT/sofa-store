import { StyleSheet } from 'react-native';
import { Fonts } from '@root/Shared/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    marginBottom: 16,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
  },
  info: {
    maxWidth: 148,
    gap: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.Inter700,
    fontWeight: 700,
  },
  description: {
    fontSize: 12,
    fontFamily: Fonts.Inter400,
    fontWeight: 400,
    opacity: 0.5,
  },
  outerManage: {
    alignItems: 'center',
  },
  manage: {
    backgroundColor: '#D0D0D033',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    borderRadius: 6,
  },
  manageItem: {
    padding: 6,
  },
  counter: {
    position: 'relative',
    backgroundColor: '#BFBFBF',
    paddingHorizontal: 10,
    borderRadius: 6,
    width: 30,
    height: 26,
  },
  counterText: {
    position: 'absolute',
    width: 30,
    height: 26,
    textAlign: 'center',
    top: 2,
    fontSize: 16,
    fontFamily: Fonts.Inter700,
    fontWeight: 700,
  },
  manageText: {
    fontSize: 16,
    fontFamily: Fonts.Inter700,
    fontWeight: 700,
  },
});
