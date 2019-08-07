import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

import {theme} from "../constants";

import {connect} from 'react-redux'
import ActionsProfile from "./ActionsProfile";

class PictureInfos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async componentDidMount() {

        this.isAvailable();
    };

    isAvailable = () => {
        let status = this.props.myProfile.location;
        if (status[0] === null)
            return 'UNAVAILABLE';
        else
            return status;
    };

    colorStatus = () => {
        let colors = '';
        if (this.isAvailable() === 'UNAVAILABLE') {
            colors = "#D8636F";
            return colors;
        } else {
            colors = theme.colors.primary;
            return colors;
        }
    };

    render() {
        const user_image = this.props.myProfile.image_url;
        let level = this.props.myProfile.cursus_users;
        let bgcolor = this.colorStatus();
        let status = this.isAvailable();

        return (
            <View style={{flex: 1, width: theme.width}}>
                <View style={styles.containerImage}>
                    <Image
                        source={{url: user_image}}
                        imageStyle={{borderRadius: 150 / 2}}
                        style={styles.userImage}
                    />
                    <View style={[styles.iconStatus, {backgroundColor: bgcolor}]}>
                        <Text style={[styles.textStatus]}>{status}</Text>
                    </View>
                </View>
                <View style={{flex: 2}}>
                    <ImageBackground
                        source={require('../assets/bg_alt2.png')}
                        style={styles.imageBg}
                    >
                    </ImageBackground>
                </View>
                <View style={styles.blockActions}>
                    <ActionsProfile/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    blockActions: {
        flex: 1,
    },
    containerImage: {
        width: theme.width,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1
    },
    imageBg: {
        flex: 1,
        width: theme.width,
    },
    iconStatus: {
        position: 'absolute',
        right: 20,
        top: 33,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        zIndex: 11
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
