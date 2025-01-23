import { useTranslation } from 'react-i18next';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { SearchFilledIcon } from '@root/Shared/assets/icons';

export const searchTabOptions = (): BottomTabNavigationOptions => {
  const { t } = useTranslation('tabs');

  return {
    title: t('search'),
    tabBarIcon: SearchFilledIcon,
  };
};
