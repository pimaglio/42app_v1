import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {connect} from 'react-redux'
import {theme} from "../constants";

import {currentMonth, currentDay} from '../actions/logTime';

class CardZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        const {allLocation, isFetching} = this.props.allLocation;

        return (
            <View style={styles.main_container}>
                <View style={styles.blockLogo}>
                    <Text style={styles.titleZone}>{this.props.zone}</Text>
                </View>
                <View style={styles.blockLogo}>
                    <Ionicons name="md-contacts" size={25} color='black'/>
                    <Text style={[styles.nbrUser, {color: theme.colors.accent}]}>{this.props.nbrUser}</Text>
                </View>
                <View style={styles.blockLogo}>
                    <Ionicons name="md-desktop" size={25} color='black'/>
                    <Text style={[styles.nbrUser, {color: theme.colors.primary}]}>{this.props.Available}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#f7f7f7',
        borderRadius: 3,
        padding: 15,
    },
    blockLogo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleZone: {
        fontFamily: 'Futura-bold',
        textTransform: 'uppercase',
        fontSize: 40,
    },
    nbrUser: {
        fontFamily: 'Futura-bold',
        textTransform: 'uppercase',
        fontSize: 20,
        marginHorizontal: 10
    },
});

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(CardZone)
