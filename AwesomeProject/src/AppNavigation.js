import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';


const AppStackNavigator = createStackNavigator(
    {
        login: { login: Login },
       
    }, {
        // see next line
        headerMode: 'none',
    });

export default AppStackNavigator