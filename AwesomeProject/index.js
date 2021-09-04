/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyApp from './MyApp';
import Basic from './src/components/Basic';
import DrawerLayAndr from './src/components/DrawerLayAndr';
import myComponent from './src/components/FetchAPI';
import flex from './src/components/Flex';
import Home from './src/components/Home';
import ViewApp from './src/components/Home';
import ListDemo from './src/components/ListDemo';
// import MyNavigetor from './src/MyNavigetor';
import fetchAPI from './src/api/AsyncCall';
import UserComponent from './src/components/UserComponents';
// import UserComponent from './src/components/UserComponents';

// AppRegistry.registerComponent(appName, () => App);

// AppRegistry.registerComponent(appName, () => Basic);
// AppRegistry.registerComponent(appName, () => MyNavigetor);
AppRegistry.registerComponent(appName, () => UserComponent);
