import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {connect} from 'react-redux'
import {theme} from "../constants";

import {currentMonth, currentDay} from '../actions/logTime';

class InfosBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thisMonth: '',
            thisDay: ''
        };
    }

    componentDidMount() {
        setTimeout(
            () => {
                if (!this.props.myProfile.isFetching) {
                    this.setState({thisMonth: currentMonth(this.props.logTime.logTime)});
                    this.setState({thisDay: currentDay(this.props.logTime.logTime)});
                }
            },
            1000
        );
    }

    render() {
        if (!this.state.thisMonth) {
            return (
                <View style={styles.main_container}>
                    <View style={{alignItems: 'flex-start'}}>
                        <Text style={styles.titleLogtime}>
                            <Ionicons name="md-speedometer" size={20} color='black'/>
                            {" "} LOGTIME
                        </Text>
                    </View>
                    <View style={styles.container_number}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <ActivityIndicator size="small" color={theme.colors.primary} style={{marginRight: 10}}/>
                                <Text style={styles.titleInfos}>HOURS{"\n"}THIS MONTH</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <ActivityIndicator size="small" color={theme.colors.primary} style={{marginRight: 10}}/>
                                <Text style={styles.titleInfos}>HOURS{"\n"}THIS DAY</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }

        return (
            <View style={styles.main_container}>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={styles.titleLogtime}>
                        <Ionicons name="md-speedometer" size={20} color='black'/>
                        {" "} LOGTIME
                    </Text>
                </View>
                <View style={styles.container_number}>
                    <View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.numberInfos}>{this.state.thisMonth}</Text>
                            <Text style={styles.titleInfos}>HOURS{"\n"}THIS MONTH</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.numberInfos}>{this.state.thisDay}</Text>
                            <Text style={styles.titleInfos}>HOURS{"\n"}THIS DAY</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        paddingTop: 15
    },
    container_number: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    titleInfos: {
        fontFamily: 'Futura-bold',
        fontSize: 12,
        color: 'black',
        textTransform: 'uppercase',
    },
    numberInfos: {
        fontFamily: 'Futura-bold',
        fontSize: 33,
        color: theme.colors.primary,
        textTransform: 'uppercase',
        marginRight: 5
    },
    titleLogtime: {
        fontFamily: 'Futura-bold',
        fontSize: 18,
        color: 'black',
        textTransform: 'uppercase',
    }
});

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(InfosBlock)
