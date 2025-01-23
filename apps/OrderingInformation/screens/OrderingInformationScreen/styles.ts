import { StyleSheet } from 'react-native';
import { theme } from '@root/Shared/styles/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.white,
  },
  buttonText: {
    fontSize: 20,
    color: theme.white,
  },
  button: {
    marginHorizontal: 32,
    marginBottom: 16,
  },
  innerButton: {
    width: '100%',
    alignItems: 'center',
  },
});
