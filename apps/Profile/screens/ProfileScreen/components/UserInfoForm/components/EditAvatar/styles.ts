import { StyleSheet } from 'react-native';
import { theme } from '@root/Shared/styles/theme';
import { Fonts } from '@root/Shared/styles/fonts';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    gap: 4,
  },
  avatarContainer: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    borderWidth: 1,
    borderColor: theme.separator,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageAvatar: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontFamily: Fonts.Inter400,
    color: theme.primary,
    fontSize: 12,
    fontWeight: 400,
  },
});
