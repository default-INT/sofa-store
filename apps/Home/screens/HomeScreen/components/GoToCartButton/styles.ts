import { StyleSheet } from 'react-native';
import { theme } from '@root/Shared/styles/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    position: 'relative',
  },
  fill: {
    position: 'relative',
    flex: 1,
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
    margin: 0,
  },
  counter: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 16,
    width: 16,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: theme.secondary,
  },
  counterText: {
    fontSize: 8,
    color: theme.primary,
  },
});
