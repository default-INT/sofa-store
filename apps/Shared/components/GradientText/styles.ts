import { StyleSheet } from 'react-native';
import { Fonts } from '@root/Shared/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    width: 180,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  maskedView: {
    flex: 1,
    flexDirection: 'row',
    height: 48,
  },
  text: {
    paddingTop: 10,
    fontSize: 24,
    fontFamily: Fonts.Cairo900,
    fontWeight: 900,
    height: '100%',
    alignItems: 'center',
    verticalAlign: 'bottom',
    textAlign: 'right',
  },
  gradient: {
    flex: 1,
  },
});
