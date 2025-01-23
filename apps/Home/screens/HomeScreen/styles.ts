import { StyleSheet } from 'react-native';
import { Fonts } from '@root/Shared/styles/fonts';
import { theme } from '@root/Shared/styles/theme';

export const styles = StyleSheet.create({
  flatList: {
    gap: 16,
    marginLeft: 16,
    marginBottom: 32,
  },
  root: {
    position: 'relative',
    paddingVertical: 16,
    backgroundColor: theme.white,
  },
  sectionTitleText: {
    fontSize: 18,
    fontFamily: Fonts.Inter600,
    fontWeight: 600,
  },
  title: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
});
