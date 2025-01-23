import { StyleSheet } from 'react-native';
import { theme } from '@root/Shared/styles/theme';

export const styles = StyleSheet.create({
  avatarContainer: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    overflow: 'hidden',
  },
  withBorder: {
    borderWidth: 1,
    borderColor: theme.separator,
  },
  image: {
    width: 72,
    height: 72,
  },
});
