import { StyleSheet } from 'react-native';
import { theme } from '@root/Shared/styles/theme';
import { Fonts } from '@root/Shared/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 188,
    backgroundColor: theme.white,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    opacity: 0.5,
    maxWidth: 288,
  },
  image: {
    width: 254,
    height: 254,
  },
  buttonLayout: {
    marginBottom: 16,
    justifyContent: 'center',
    marginHorizontal: 32,
  },
  textLayout: {
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.white,
    fontFamily: Fonts.Inter400,
    fontWeight: 400,
    fontSize: 16,
    textAlign: 'center',
  },
});
