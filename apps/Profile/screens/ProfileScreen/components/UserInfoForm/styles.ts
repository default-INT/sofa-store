import { StyleSheet } from 'react-native';
import { theme } from '@root/Shared/styles/theme';
import { Fonts } from '@root/Shared/styles/fonts';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    borderStyle: 'solid',
    borderColor: theme.separator,
  },
  nameContainer: {
    flex: 1,
    gap: 8,
  },
  innerButton: {
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.white,
    fontFamily: Fonts.Inter600,
    fontSize: 17,
  },
});
