import { StyleSheet } from 'react-native';
import { theme } from '@root/Shared/styles/theme';
import { Fonts } from '@root/Shared/styles/fonts';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  root: {
    gap: 16,
  },
  titleText: {
    fontFamily: Fonts.Inter700,
    fontSize: 20,
    fontWeight: 700,
  },
  button: {
    height: 172,
    borderRadius: 24,
    padding: 16,
    width: 180,
  },
  linkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  linkColumn: {
    flex: 1,
    gap: 8,
  },
  linkRow: {
    flexDirection: 'row',
    gap: 8,
    flex: 1,
  },
  privacyPolicy: {
    backgroundColor: theme.sections.privacyPolicy,
  },
  termOfUse: {
    backgroundColor: theme.sections.termsOfUse,
  },
  developerWebsite: {
    backgroundColor: theme.sections.developerWebsite,
  },
  buttonText: {
    color: theme.white,
    fontFamily: Fonts.Inter700,
    fontWeight: 700,
    fontSize: 16,
  },
  goToOrderingInfoBtn: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: theme.separator,
  },
});
