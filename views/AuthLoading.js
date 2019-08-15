import React from 'react';
import {
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

import Auth from '../actions/Auth';

import {Loading} from '../components';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchmyProfile from '../actions/fetchMyProfile';
import fetchAllLocation from '../actions/fetchLocation';
import fetchLogTime from '../actions/fetchLogTime';


class AuthLoading extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._bootstrapAsync();

    }

    _bootstrapAsync = async () => {
        AsyncStorage.getItem('userToken', (err, result) => {
            if (result !== null) {
                let auth = new Auth();
                auth.checkToken(result).then((response) => {
                    if (response !== false) {
                        this.props.fetchmyProfile(result);
                        this.props.fetchAllLocation(result);
                        setTimeout(
                            () => {
                                if (!this.props.myProfile.isFetching){
                                    this.props.fetchLogTime(this.props.myProfile.myProfile.id, result);
                                    this.props.navigation.navigate('App');
                                }
                            },
                            1000
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

function mapStateToProps(state) {
    return {
        myProfile: state.myProfile
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ fetchmyProfile, fetchAllLocation, fetchLogTime }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading)

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
