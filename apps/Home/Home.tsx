import { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@root/Home/screens/HomeScreen';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';

const HomeStack = createNativeStackNavigator();

export const Home = memo(() => (
  <HomeStack.Navigator
    initialRouteName={gen.loc(r.app.tabs.home.root)}
    screenOptions={{ headerShown: false }}
  >
    <HomeStack.Screen
      name={gen.loc(r.app.tabs.home.root)}
      component={HomeScreen}
    />
  </HomeStack.Navigator>
));

Home.displayName = 'Home';
