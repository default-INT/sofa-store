import { StyleSheet } from 'react-native';
import { theme } from '@root/Shared/styles/theme';
import { Fonts } from '@root/Shared/styles/fonts';

export const styles = StyleSheet.create({
  text: {
    fontWeight: 700,
    fontSize: 18,
    color: theme.defaultTextColor,
    fontFamily: Fonts.Inter700,
  },
});
