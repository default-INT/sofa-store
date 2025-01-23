import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { theme } from '@root/Shared/styles/theme';
import { Header } from './components/Header';

export const options: NativeStackNavigationOptions = {
  header: () => <Header />,
  contentStyle: {
    backgroundColor: theme.transparent,
  },
  animation: 'none',
};
