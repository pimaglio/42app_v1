import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {theme} from "../constants";
import {Card} from '../components';
import { Ionicons } from '@expo/vector-icons';


import {connect} from 'react-redux'

class PictureInfos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isLoading: true,
            status: '',
        };
    }

    async componentDidMount() {

        this.isAvailable();
    };

    isAvailable = () => {
        let status = this.props.myProfile.location;
        if (status === null)
            return 'UNAVAILABLE';
        else
            return status;
    };

    colorStatus = () => {
        let colors = '';
        if (this.isAvailable() === 'UNAVAILABLE') {
            colors = "backgroundColor: 'red'";
            return colors;
        } else {
            colors = "backgroundColor: theme.colors.primary";
            return colors;
        }
    };

    render() {
        const user_image = this.props.myProfile.image_url;
        let level = this.props.myProfile.cursus_users;
        let bgcolor = this.colorStatus();
        let status = this.isAvailable();
        console.log(user_image);

        return (
            <ImageBackground
                source={require('../assets/bg_profile.png')}
                imageStyle={styles.bgProfile}
                style={styles.containerBg}
            >
                <View style={styles.containerImage}>
                    <Image
                        source={{url: user_image}}
                        imageStyle={{borderRadius: 150 / 2}}
                        style={styles.userImage}
                    />
                    <View style={[styles.iconStatus, {bgcolor}]}>
                        <Text style={[styles.textStatus]}>{status}</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    blockActions: {

    },
    containerImage: {
        width: theme.width,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    containerBg: {
        flex: 1,
        flexDirection: 'row',
        width: theme.width,
        height: '100%',
        alignItems: 'center'
    },
    bgProfile: {
        width: theme.width,
        height: '100%'
    },
    iconStatus: {
        position: 'absolute',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom: 3,
        right: 30,
        top: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#D8636F'
    },
    textStatus: {
        fontFamily: 'Futura-medium',
        fontSize: 15,
        color: 'white',
    },
    name: {
        fontFamily: 'Futura-book',
        fontSize: 20,
        color: 'black'
    },
    userImage: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        borderWidth: 4,
        borderColor: 'white',
    }
});

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(PictureInfos)
