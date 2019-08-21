import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import Home from '../views/Home';
import Login from '../views/Login';
import AuthLoading from '../views/AuthLoading';
import Location from '../views/Location';
import Zone from '../views/Zone';

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

const Cluster = createStackNavigator(
    {
        Location: Location
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

const ClusterZone = createStackNavigator(
    {
        Zone: Zone
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

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
        Cluster: Cluster,
        Zone: ClusterZone
    },
    {
        initialRouteName: 'AuthLoading',
    }
));
