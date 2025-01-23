import { useTranslation } from 'react-i18next';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { OrdersIcon } from '@root/Shared/assets/icons';

export const ordersTabOptions = (): BottomTabNavigationOptions => {
  const { t } = useTranslation('tabs');

  return {
    title: t('orders'),
    tabBarIcon: OrdersIcon,
  };
};
