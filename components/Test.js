import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {connect} from 'react-redux'
import {theme} from "../constants";

import {currentMonth, currentDay} from '../actions/logTime';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thisMonth: '',
            thisDay: ''
        };
    }

    WholeNews() {
        const cluster = this.props.data;
        const wdth = 30;
        const border = 5;
        const ico = 25;
        /*        let Range = [1, 2 ,3 , 4 , 5, 6 ,7 , 8 , 9 , 10, 11, 12, 13, 14];*/

        let numbers = cluster.z1;

        return numbers.map(function(number){
            if (number.host[3] === '3') {
                return(
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
        const time = 1000;
        return (
            <View>
                {this.WholeNews()}
            </View>
        )
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

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(Test)
