import { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { CartScreen } from '@root/Cart/screens/CartScreen';
import { ReservationsScreen } from '@root/Cart/screens/ReservationsScreen';
import { SuccessScreen } from '@root/Cart/screens/SuccessScreen';

const StackNavigator = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  header: () => null,
};

export const Cart = memo(() => (
  <StackNavigator.Navigator
    initialRouteName={gen.loc(r.app.cart.root)}
    screenOptions={screenOptions}
  >
    <StackNavigator.Screen
      name={gen.loc(r.app.cart.root)}
      component={CartScreen}
    />
    <StackNavigator.Screen
      name={gen.loc(r.app.cart.reservation)}
      component={ReservationsScreen}
    />
    <StackNavigator.Screen
      name={gen.loc(r.app.cart.success)}
      component={SuccessScreen}
      initialParams={{ hideBack: true }}
    />
  </StackNavigator.Navigator>
));

Cart.displayName = 'Cart';
