import React from 'react';
import {StyleSheet, Text, View, ProgressViewIOS} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Progress from '../components/Progress';

import {connect} from 'react-redux'
import {theme} from "../constants";

class AgendaBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container_level}>
                <Text style={styles.titleAgenda}>
                    <Ionicons name="md-calendar" size={20} color='black'/>
                    {" "} Agenda{" "}
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={[styles.police,{color: theme.colors.accent}]}>[EXAM]{' '}</Text>
                            <Text style={[styles.police]}>Session du soir</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons name="md-time" size={20} color='black'/>
                            <Text style={[styles.police, {marginLeft: 5}]}>in 3 days</Text>
                        </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.police, {color: theme.colors.primary}]}>[EVENT]{' '}</Text>
                        <Text style={[styles.police]}>Meet-up React</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="md-time" size={20} color='black'/>
                        <Text style={[styles.police, {marginLeft: 5}]}>in 3 days</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.police, {color: theme.colors.secondary}]}>[AG PEDAGO]{' '}</Text>
                        <Text style={[styles.police]}>Bilan Piscine</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name="md-time" size={20} color='black'/>
                        <Text style={[styles.police, {marginLeft: 5}]}>in 3 days</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container_level: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 15,
    },
    titleAgenda: {
        fontFamily: 'Futura-bold',
        fontSize: 18,
        color: 'black',
        textTransform: 'uppercase',
        paddingBottom: 15
    },
    police: {
        fontFamily: 'Futura-medium',
        fontSize: 18,
        color: 'black',
        paddingBottom: 15
    },
});

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(AgendaBlock)
