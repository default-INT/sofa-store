import { useTranslation } from 'react-i18next';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { HomeIcon } from '@root/Shared/assets/icons';

export const homeTabOptions = (): BottomTabNavigationOptions => {
  const { t } = useTranslation('tabs');

  return {
    title: t('home'),
    tabBarIcon: HomeIcon,
  };
};
