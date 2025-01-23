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
});
