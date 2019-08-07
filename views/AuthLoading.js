import React from 'react';
import {
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import Auth from '../actions/Auth';

import {Loading} from '../components';

import {connect} from 'react-redux';
import {getProfile} from "../store/actions";

class AuthLoading extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    fetchProfile = async(token) => {
        return await fetch('https://api.intra.42.fr/v2/me',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then((response) => {
                response.json().then((data) => {
                    this.props.getProfile(data);
                })
            }).catch((error) => console.log(error));
    };

    _bootstrapAsync = async () => {
        AsyncStorage.getItem('userToken', (err, result) => {
            if (result !== null) {
                let auth = new Auth();
                auth.checkToken(result).then((response) => {
                    if (response !== false) {
                        this.fetchProfile(result);
                        setTimeout(
                            () => {
                                this.props.navigation.navigate('App');
                            },
                            1500
                        );
                    }
                    else
                        this.props.navigation.navigate('Auth');
                });
            } else
                this.props.navigation.navigate('Auth');
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden/>
                <Loading/>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, {getProfile})(AuthLoading)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
