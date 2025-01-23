import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { memo } from 'react';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { OrderDetailsScreen } from '@root/OrderDetails/screens/OrderDetailsScreen';

const StackNavigator = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  header: () => null,
  animation: 'none',
};

export const OrderDetails = memo(() => (
  <StackNavigator.Navigator
    initialRouteName={gen.loc(r.app.orderDetails.root)}
    screenOptions={screenOptions}
  >
    <StackNavigator.Screen
      name={gen.loc(r.app.orderDetails.root)}
      component={OrderDetailsScreen}
    />
  </StackNavigator.Navigator>
));

OrderDetails.displayName = 'OrderDetails';
