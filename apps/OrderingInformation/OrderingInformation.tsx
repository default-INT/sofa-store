import { memo } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { OrderingInformationScreen } from './screens/OrderingInformationScreen';

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  header: () => null,
};

export const OrderingInformation = memo(() => (
  <Stack.Navigator
    initialRouteName={gen.loc(r.app.orderingInformation.root)}
    screenOptions={screenOptions}
  >
    <Stack.Screen
      name={gen.loc(r.app.orderingInformation.root)}
      component={OrderingInformationScreen}
    />
  </Stack.Navigator>
));

OrderingInformation.displayName = 'OrderingInformation';
