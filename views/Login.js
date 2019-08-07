import React from 'react'
import {StyleSheet, Text, View, Button, Linking, StatusBar, TouchableOpacity, Image, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Auth from '../actions/Auth';
import {theme} from "../constants";

const win = Dimensions.get('screen');

export default class Login extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/Logo_black.png')}
                    />
                </View>
                <View style={styles.containerLogoText}>
                        <Text style={styles.textLogo1}>LYON</Text>
                    <Text style={styles.textLogo2}>Auvergne-Rhône-Alpes</Text>
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={[styles.buttonLogin]} onPress={this.handleClick}>
                        <Text style={styles.textLogin}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar hidden/>
            </View>
        );
    }

    componentWillUnmount() {
        Linking.removeEventListener("url", this._handleOpenURL);
    }

    handleClick = () => {
        Linking.addEventListener("url", this._handleOpenURL);
        Linking.openURL('https://api.intra.42.fr/oauth/authorize?client_id=33e1f1c73faff37ed56b6f079189c2ef37897d6757c9978ce920f61953507c64&redirect_uri=exp%3A%2F%2F127.0.0.1%3A19000&response_type=code');
    };

    _handleOpenURL = (event) => {
        Linking.removeEventListener("url", this._handleOpenURL);
        let regex = /[?&]([^=#]+)=([^&#]*)/g, match;
        match = regex.exec(event.url);
        if (match[1] === 'code') {
            let auth = new Auth();
            auth.getToken(match[2]).then((responseData) => {
                if (responseData === 'success') {
                    this.props.navigation.navigate('AuthLoading');
                }
            });
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerLogo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    containerLogoText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerButton: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: win.width/2.5,
        height: win.width/2.5
    },
    buttonLogin: {
        width: 150,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.primary
    },
    textLogin: {
        fontFamily: 'Futura-medium',
        fontSize: 20,
        color: theme.colors.primary
    },
    textLogo1: {
        fontFamily: 'Futura-heavy-oblique',
        fontSize: 30,
        color: 'black',
    },
    textLogo2: {
        fontFamily: 'Futura-medium',
        fontSize: 20,
        color: 'black',
    }
});
