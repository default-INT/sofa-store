import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { theme } from '@root/Shared/styles/theme';
import { Fonts } from '@root/Shared/styles/fonts';

export const options: BottomTabNavigationOptions = ({
  tabBarActiveTintColor: theme.tabActive,
  tabBarInactiveTintColor: theme.tabInactive,
  tabBarIconStyle: {
    width: 20,
    height: 20,
  },
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: theme.transparent,
    elevation: 0,
  },
  tabBarLabelStyle: {
    fontFamily: Fonts.Inter400,
    marginTop: 4,
    fontSize: 9,
  },
  header: () => null,
});
