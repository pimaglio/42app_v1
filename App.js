import React from 'react'
import Navigation from './navigation/Navigation';

import {Provider} from 'react-redux';
import configureStore from './configureStore';

import * as Font from 'expo-font';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';

const store = configureStore();

/*
store.subscribe(() => console.log('store', store.getState()));
*/

export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            "Futura-medium": require("./assets/fonts/FuturaPTMedium.otf"),
            "Futura-heavy-oblique": require("./assets/fonts/FuturaPTHeavyOblique.otf"),
            "Futura-bold": require("./assets/fonts/FuturaPTBold.otf"),
            "Futura-book": require("./assets/fonts/FuturaPTBook.otf"),
            "Futura-light": require("./assets/fonts/FuturaPTLight.otf"),
        });

        this.setState({fontLoaded: true});
    }

    render() {
        if (!this.state.fontLoaded) {
            return (
                <View style={styles.container}>
                    <StatusBar hidden/>
                    <ActivityIndicator size="large" color="black"/>
                </View>
            );
        }
        return (
            <Provider store={store}>
                <Navigation/>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
