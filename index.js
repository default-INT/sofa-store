import { AppRegistry } from 'react-native';
import { i18n } from './apps/Shared/utils/i18n';
import App from './apps/bootstrap';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => {
  i18n.init();

  return App;
});
