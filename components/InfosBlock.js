import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {connect} from 'react-redux'
import {theme} from "../constants";

class InfosBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
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
                            <Text style={styles.numberInfos}>127H</Text>
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
