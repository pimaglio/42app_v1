import React from 'react'
import {StatusBar, StyleSheet, View, ImageBackground, Text} from 'react-native';

import HeaderTitleLogin from '../components/HeaderProfileTitle';
import PictureInfos from '../components/PictureInfos';

import {theme} from "../constants";
import {Block, Card} from '../components';
import FadeInView from "../components/fadeAnim";
import ActionsProfile from "../components/ActionsProfile";

export default class Home extends React.Component {
    static navigationOptions = {
        headerTitle: <HeaderTitleLogin/>,
    };

    render() {

        const duration = 1500;
        return (
            <FadeInView duration={duration} style={styles.container}>
                <StatusBar hidden/>
                <View style={styles.main_profile}>
                    <PictureInfos/>
                </View>
                <View style={styles.shortcut_profile}>
                    <View style={styles.actionProfile}>

                    </View>
                    <View>

                    </View>
                </View>
            </FadeInView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
    },
    main_profile: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
    },
    actionProfile: {
        width: theme.width,
        height: 50,
    },
    shortcut_profile: {
        flex: 5,
    },
});
