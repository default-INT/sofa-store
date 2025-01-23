import { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { gen } from '@root/Shared/utils/router/gen';
import { r } from '@root/Shared/constants/routes';
import { SearchScreen } from '@root/Search/components/SearchScreen';

const SearchStack = createNativeStackNavigator();

export const Search = memo(() => (
  <SearchStack.Navigator
    initialRouteName={gen.loc(r.app.tabs.search.root)}
    screenOptions={{ headerShown: false, header: () => null }}
  >
    <SearchStack.Screen name={gen.loc(r.app.tabs.search.root)} component={SearchScreen} />
  </SearchStack.Navigator>
));

Search.displayName = 'Search';
