import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, ActivityIndicator} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {connect} from 'react-redux'
import {theme} from "../constants";
import {bindActionCreators} from "redux";
import fetchmyProfile from "../actions/fetchMyProfile";
import fetchAllLocation from "../actions/fetchLocation";
import fetchLogTime from "../actions/fetchLogTime";
import {
    Loading,
    FadeInView,
    LevelBlock,
    InfosBlock,
    AgendaBlock,
    HeaderProfileTitle,
    PictureInfos,
    Test
} from "../components";


class Zone1Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true
        };
    };

    /*    NumberList(props) {
            const numbers = props.numbers;
            const listItems = numbers.map((number) =>
                <li>{number}</li>
            );
            return (
                <ul>{listItems}</ul>
            );
        };*/

    rangeList() {
        const numbers = [1 - 15];
        const listItems = numbers.map((number) =>
            <li key={number.toString()}><Text style={styles.titleRange}>{number}</Text></li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    WholeNews() {
        const cluster = this.props.allLocation;
        const wdth = 30;
        const border = 5;
        const ico = 25;
        /*        let Range = [1, 2 ,3 , 4 , 5, 6 ,7 , 8 , 9 , 10, 11, 12, 13, 14];*/

        let numbers = cluster.z1;

        return numbers.map(function (number) {
            if (number.host[3] === '7') {
                return (
                    <View key={number.toString()}>
                        <View style={styles.rangeBlock}>
                            <View style={styles.itemZone}>
                                <Image
                                    style={{width: wdth, height: wdth, borderRadius: border}}
                                    source={{uri: 'https://cdn.intra.42.fr/users/medium_' + number.user.login + '.jpg'}}
                                />
                                <Text style={styles.login}>{number.user.login}</Text>
                            </View>
                        </View>
                    </View>
                );
            }
        });
    }

    render() {
        const cluster = this.props.allLocation;
        const wdth = 30;
        const border = 5;
        const ico = 25;


        /*return (
            <ScrollView style={styles.container_level}>
                <View style={styles.range}>
                    <Text style={styles.titleRange}>R13</Text>
                    <View style={styles.rangeBlock}>
                        <View style={styles.itemZone}>
                            <Ionicons name="md-desktop" size={ico} color='black'/>
                            <Text style={styles.free}>free</Text>
                        </View>
                        <View style={styles.itemZone}>
                            <Image
                                style={{width: wdth, height: wdth, borderRadius: border}}
                                source={require('../assets/me.png')}
                            />
                            <Text style={styles.login}>pimaglio</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );*/

        return (
            <ScrollView style={styles.container_level}>
                <View style={styles.range}>
                    <Test data={cluster}/>
                </View>
            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({
    container_level: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    range: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#f7f7f7',
        borderRadius: 3,
    },
    rangeBlock: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    itemZone: {
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    login: {
        fontFamily: 'Futura-medium',
        fontSize: 10,
        color: 'black',
        textTransform: 'uppercase',
    },
    free: {
        fontFamily: 'Futura-medium',
        fontSize: 10,
        color: theme.colors.primary,
        textTransform: 'uppercase',
    },
    titleRange: {
        fontFamily: 'Futura-bold',
        fontSize: 20,
        color: 'black',
        textTransform: 'uppercase',
    }
});

function mapStateToProps(state) {
    return {
        allLocation: state.allLocation
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({fetchAllLocation}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Zone1Block)