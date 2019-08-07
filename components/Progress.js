import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {theme} from "../constants";
import {LinearGradient} from 'expo-linear-gradient';

export default class Progress extends React.Component {
    render() {
        let xp = parseFloat(this.props.xp);
        let xpP = this.props.xpP;
        return (
            <View style={styles.barFond}>
                <LinearGradient
                    end={{x: 1, y: 0}}
                    colors={[theme.colors.primary, '#2DD57B']}
                    style={{
                        flex: xp,
                        height: 27,
                        opacity: 1,
                        borderRadius: 2,
                        borderWidth: 2,
                        borderColor: 'rgba(255, 255, 255, 0.54)',
                        marginHorizontal: 2
                    }}
                >
                </LinearGradient>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.textXp}>{xpP}%</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    barFond: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 35,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'white',
    },
    textXp: {
        fontFamily: 'Futura-medium',
        fontSize: 15,
        color: 'black',
        textTransform: 'uppercase',
    }
});