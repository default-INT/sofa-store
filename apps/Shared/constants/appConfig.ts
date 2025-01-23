import { Platform } from 'react-native';
import { Locale } from '@root/Shared/types/locale';

export const appConfig = {
  defaultLanguage: Locale.En,
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};
