import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp } from '@react-navigation/native';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { TabBottomNavigator } from '@root/Root/navigation/TabBottomNavigator';
import { Cart } from '@root/Cart';
import { OrderDetails } from '@root/OrderDetails';
import { VectorBackground } from '@root/Root/components/VectorBackground';
import { OrderingInformation } from '@root/OrderingInformation';
import { options } from './options';

interface IParamList {
  [key: string]: any;
}

const StackNavigator = createNativeStackNavigator();
const layout = (props: any) => <VectorBackground {...props} />;

export const RootNavigator = () => (
  <StackNavigator.Navigator
    initialRouteName={gen.loc(r.app.tabs)}
    screenOptions={options}
    layout={layout}
  >
    <StackNavigator.Screen
      name={gen.loc(r.app.tabs)}
      component={TabBottomNavigator}
    />
    <StackNavigator.Screen
      name={gen.loc(r.app.cart)}
      component={Cart}
    />
    <StackNavigator.Screen
      name={gen.loc(r.app.orderDetails)}
      component={OrderDetails}
    />
    <StackNavigator.Screen
      name={gen.loc(r.app.orderingInformation)}
      component={OrderingInformation}
    />
  </StackNavigator.Navigator>
);

// TODO: Add typing in future
// export type TRootNavigator = TGetRouteParams<typeof routesConfig['app']>;
export type TRootNavProp = NavigationProp<IParamList>;
