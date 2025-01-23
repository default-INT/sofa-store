import { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { Home } from '@root/Home';
import { homeTabOptions } from '@root/Home/options';
import { profileTabOptions } from '@root/Profile/options';
import { ordersTabOptions } from '@root/Orders/options';
import { searchTabOptions } from '@root/Search/options';
import { Orders } from '@root/Orders';
import { Search } from '@root/Search';
import { Profile } from '@root/Profile';
import { options } from './options';

const BottomTabNavigator = createBottomTabNavigator();

export const TabBottomNavigator = memo(() => (
  <BottomTabNavigator.Navigator
    initialRouteName={gen.loc(r.app.tabs.home)}
    screenOptions={options}
  >
    <BottomTabNavigator.Screen
      name={gen.loc(r.app.tabs.home)}
      component={Home}
      options={homeTabOptions}
    />
    <BottomTabNavigator.Screen
      name={gen.loc(r.app.tabs.search)}
      component={Search}
      options={searchTabOptions}
    />
    <BottomTabNavigator.Screen
      name={gen.loc(r.app.tabs.orders)}
      component={Orders}
      options={ordersTabOptions}
    />
    <BottomTabNavigator.Screen
      name={gen.loc(r.app.tabs.profile)}
      component={Profile}
      initialParams={{ hideBack: true }}
      options={profileTabOptions}
    />
  </BottomTabNavigator.Navigator>
));
