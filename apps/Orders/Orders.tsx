import { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrdersScreen } from '@root/Orders/screens/OrdersScreen';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';

const OrdersStack = createNativeStackNavigator();

export const Orders = memo(() => (
  <OrdersStack.Navigator
    initialRouteName={gen.loc(r.app.tabs.orders.root)}
    screenOptions={{ headerShown: false, headerTransparent: true }}
  >
    <OrdersStack.Screen
      name={gen.loc(r.app.tabs.orders.root)}
      component={OrdersScreen}
      initialParams={{ transparentHeader: true }}
    />
  </OrdersStack.Navigator>
));

Orders.displayName = 'Orders';
