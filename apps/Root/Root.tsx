import { memo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@root/Root/navigation/RootNavigator';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export const Root = memo(() => (
  <SafeAreaProvider>
    <NavigationContainer theme={CustomTheme}>
      <RootNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
));
