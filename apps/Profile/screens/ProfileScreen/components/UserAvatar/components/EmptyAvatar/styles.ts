import { StyleSheet } from 'react-native';
import { theme } from '@root/Shared/styles/theme';

export const styles = StyleSheet.create({
  avatarContainer: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    borderWidth: 1,
    borderColor: theme.separator,
    overflow: 'hidden',
    backgroundColor: theme.tabInactive,
  },
});
