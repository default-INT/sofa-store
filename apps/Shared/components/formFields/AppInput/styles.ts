import { Platform, StyleSheet } from 'react-native';
import { theme } from '@root/Shared/styles/theme';
import { Fonts } from '@root/Shared/styles/fonts';

export const styles = StyleSheet.create({
  root: {
    gap: 4,
    position: 'relative',
  },
  label: {
    paddingLeft: 12,
  },
  textInput: {
    flex: 1,
    color: theme.defaultTextColor,
    fontFamily: Fonts.Inter400,
    fontSize: 16,
    height: Platform.OS === 'android' ? 48 : undefined,
  },
  icon: {

  },
  input: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    borderColor: theme.primaryDark,
    borderRadius: 60,
    maxHeight: 50,
  },
  formikContainer: {
    position: 'relative',
  },
});
