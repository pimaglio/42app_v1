import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import Home from '../views/Home';
import Login from '../views/Login';
import AuthLoading from '../views/AuthLoading';

import {theme} from "../constants";

const AppStack = createStackNavigator(
    {
        Home: Home
    },

    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
                borderBottomWidth: 3,
                borderBottomColor: theme.colors.primary
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

const AuthStack = createStackNavigator(
    {
        SignIn: Login
    },
    {
        headerMode: 'none'
    }
);

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));
