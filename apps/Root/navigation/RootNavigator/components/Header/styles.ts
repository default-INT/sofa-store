import { StyleSheet } from 'react-native';
import { theme } from '@root/Shared/styles/theme';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
  transparentBackground: {
    backgroundColor: theme.transparent,
  },
  profile: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  logoBox: {
    height: 48,
    width: 48,
  },
  wideTitle: {
    width: 280,
  },
});
