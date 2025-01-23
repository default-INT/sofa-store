import { NavigationRoute, ParamListBase, useNavigationState } from '@react-navigation/native';
import { useMemo } from 'react';
import { isNil } from '@root/Shared/utils/isNil';

// eslint-disable-next-line max-len
const getCurrentScreen = (routes: NavigationRoute<ParamListBase, string>[], index: number, count = 0): [string, number, NavigationRoute<ParamListBase, string>] => {
  if (!routes[index].state) return [routes[index].name, count + 1, routes[index]];

  const isFinishScreen = !routes[index]?.state?.routes || isNil(routes[index]?.state?.index);

  if (isFinishScreen) return [routes[index].name, count + 1, routes[index]];

  return getCurrentScreen(
    routes[index].state?.routes as NavigationRoute<ParamListBase, string>[],
    routes[index]?.state?.index || 0,
    count + 1,
  );
};

export const useCurrentScreen = () => {
  const navState = useNavigationState(state => state);

  return useMemo(
    () => (navState?.routes ? getCurrentScreen(navState?.routes, navState?.index) : null),
    [navState?.index, navState?.routes],
  );
};
