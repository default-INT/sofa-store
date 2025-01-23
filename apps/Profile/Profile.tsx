import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { memo } from 'react';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { ProfileScreen } from '@root/Profile/screens/ProfileScreen';

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  header: () => null,
  animation: 'none',
};

const ProfileStack = createNativeStackNavigator();

export const Profile = memo(() => (
  <ProfileStack.Navigator
    initialRouteName={gen.loc(r.app.tabs.profile.root)}
    screenOptions={screenOptions}
  >
    <ProfileStack.Screen
      name={gen.loc(r.app.tabs.profile.root)}
      component={ProfileScreen}
      initialParams={{ hideBack: true }}
    />
  </ProfileStack.Navigator>
));

Profile.displayName = 'Profile';
