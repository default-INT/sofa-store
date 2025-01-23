import { useTranslation } from 'react-i18next';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ProfileIcon } from '@root/Shared/assets/icons';

export const profileTabOptions = (): BottomTabNavigationOptions => {
  const { t } = useTranslation('tabs');

  return {
    title: t('profile'),
    tabBarIcon: ProfileIcon,
  };
};
