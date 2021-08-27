/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyApp from './MyApp';
import Basic from './src/components/Basic';
import DrawerLayAndr from './src/components/DrawerLayAndr';
import Home from './src/components/Home';
import ViewApp from './src/components/Home';
import ListDemo from './src/components/ListDemo';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Basic);
// AppRegistry.registerComponent(appName, () => MyApp);
