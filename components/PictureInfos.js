import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';

import {theme} from "../constants";
import {Ionicons} from '@expo/vector-icons';
import {connect} from 'react-redux'
import ActionsProfile from "./ActionsProfile";
import {bindActionCreators} from "redux";
import fetchmyProfile from "../actions/fetchMyProfile";


class PictureInfos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        this.isAvailable();
    };

    isAvailable = () => {
        let status = this.props.myProfile.myProfile.location;
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

    goLocation = () => {
        this.props.navigation.navigate('Cluster')
    };

    render() {
        const user_image = this.props.myProfile.myProfile.image_url;
        let bgcolor = this.colorStatus();
        let status = this.isAvailable();

        return (
            <View style={{flex: 1, width: theme.width}}>
                <View style={styles.containerImage}>
                    <TouchableOpacity style={styles.Cluster} onPress={this.goLocation}>
                        <Ionicons name="md-desktop" size={32} color={theme.colors.primary}/>
                        <Text style={[styles.textStatus, {marginLeft: 10}]}>CLUSTER</Text>
                    </TouchableOpacity>
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
    },
    Cluster: {
        paddingHorizontal: 20,
        flex: 1,
        width: theme.width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    iconCluster: {
        width: theme.width / 3,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleCluster: {
        fontFamily: 'Futura-book',
        fontSize: 20,
        color: 'white'
    }
});

function mapStateToProps(state) {
    return {
        myProfile: state.myProfile
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({fetchmyProfile}, dispatch)
    }
}

export default connect(mapStateToProps)(PictureInfos)
