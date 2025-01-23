import { Locale } from '@root/Shared/types/locale';
import enSharedTranslation from '@root/Shared/translations/en-US.json';
import ruSharedTranslation from '@root/Shared/translations/ru-RU.json';

export const resources = {
  [Locale.En]: enSharedTranslation,
  [Locale.Ru]: ruSharedTranslation,
};
