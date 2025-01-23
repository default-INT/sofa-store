import { StyleSheet } from 'react-native';
import { theme } from '@root/Shared/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 3,
    borderColor: theme.borderDefault,
    backgroundColor: theme.tabInactive,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
