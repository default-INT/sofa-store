import { StyleSheet } from 'react-native';
import { Fonts } from '@root/Shared/styles/fonts';
import { theme } from '@root/Shared/styles/theme';

export const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.Inter500,
    fontWeight: '500',
    fontSize: 16,
    color: theme.defaultTextColor,
  },
});
