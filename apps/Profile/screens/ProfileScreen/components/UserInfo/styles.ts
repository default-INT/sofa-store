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
    justifyContent: 'center',
    textAlign: 'center',
  },
  displayName: {
    fontFamily: Fonts.Inter700,
    fontWeight: 700,
    fontSize: 20,
  },
  editContainer: {
    justifyContent: 'center',
  },
});
