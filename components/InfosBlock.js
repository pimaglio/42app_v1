import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {connect} from 'react-redux'
import {theme} from "../constants";

import {currentDate, currentMonth, currentDay} from '../actions/logTime';

class InfosBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thisMonth: ''
        };
    }

    componentDidMount() {
        setTimeout(
            () => {
                if (!this.props.myProfile.isFetching) {
                    this.setState({thisMonth: currentMonth(this.props.logTime.logTime)});
                    currentDay(this.props.logTime.logTime);
                }
            },
            1000
        );
    }

    _getTime = () => {
        let cumulday = 0;

        while (alltime[i]) {
            let currentday = alltime[i].begin_at.split('-');
            let regex = /[^T]*/g,
                matchcurrentday;
            matchcurrentday = regex.exec(currentday[2]);
            if (matchday[0] === matchcurrentday[0] && spe !== null){
                let h = 0;
                let m = 0;
                let s = 0;

                let resa = alltime[i].begin_at.split('T');
                let resa2 = resa[1].split(':');
                let regex = /[^.]*!/g,
                    match;
                match = regex.exec(resa2[2]);
                h = parseInt(resa2[0], 10) * 3600;
                m = parseInt(resa2[1], 10) * 60;
                s = parseInt(match, 10);
                let totalA = h + m + s;

                let resb = alltime[i].end_at.split('T');
                let resb2 = resb[1].split(':');
                let regex2 = /[^.]*!/g,
                    match2;
                match2 = regex2.exec(resb2[2]);
                h = parseInt(resb2[0], 10) * 3600;
                m = parseInt(resb2[1], 10) * 60;
                s = parseInt(match, 10);
                let totalB = h + m + s;
                let total =  totalB - totalA;
                cumulday += total;
            }
            if (matchday[0] === matchcurrentday[0] && spe === null){
                var d = new Date();

                let hc = d.getHours();
                let mc = d.getMinutes();
                let sc = d.getSeconds();

                let resa = alltime[i].begin_at.split('T');
                let resa2 = resa[1].split(':');
                let regex = /[^.]*/g,
                    match;
                match = regex.exec(resa2[2]);
                let h = parseInt(resa2[0], 10) * 3600;
                let m = parseInt(resa2[1], 10) * 60;
                let s = parseInt(match, 10);
                let totalA = h + m + s;

                hc *= 3600;
                mc *= 60;
                let totalB = hc + mc+ sc;
                let total =  totalB - totalA;
                cumulday += total;
            }
            i++;
        }
        cumul /= 3600;
        cumulday /= 3600;
        /*        console.log(alltime[1]);
                console.log(alltime[2]);
                console.log(alltime[3]);*/
        console.log();
        this.setState({timeCurrent: Math.round(cumul)});
        this.setState({timeCurrentDay: Math.round(cumulday)});
    };

    render() {
        if (!this.state.thisMonth) {
            return (
                <View style={styles.main_container}>
                    <View style={{alignItems: 'flex-start'}}>
                        <Text style={styles.titleLevel}>
                            <Ionicons name="md-speedometer" size={20} color='black'/>
                            {" "} LOGTIME
                        </Text>
                    </View>
                    <View style={styles.container_number}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <ActivityIndicator size="small" color={theme.colors.primary} style={{marginRight: 10}}/>
                                <Text style={styles.titleInfos}>THIS{"\n"}MONTH</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <ActivityIndicator size="small" color={theme.colors.primary} style={{marginRight: 10}}/>
                                <Text style={styles.titleInfos}>THIS{"\n"}DAY</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }

        return (
            <View style={styles.main_container}>
                <View style={{alignItems: 'flex-start'}}>
                    <Text style={styles.titleLevel}>
                        <Ionicons name="md-speedometer" size={20} color='black'/>
                        {" "} LOGTIME
                    </Text>
                </View>
                <View style={styles.container_number}>
                    <View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.numberInfos}>{this.state.thisMonth}</Text>
                            <Text style={styles.titleInfos}>THIS{"\n"}MONTH</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.numberInfos}>8H</Text>
                            <Text style={styles.titleInfos}>THIS{"\n"}DAY</Text>
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
    titleLevel: {
        fontFamily: 'Futura-bold',
        fontSize: 20,
        color: 'black',
        textTransform: 'uppercase',
    }
});

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(InfosBlock)
