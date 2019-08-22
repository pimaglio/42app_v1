import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View, Image} from 'react-native';
import {connect} from 'react-redux'
import {theme} from "../constants";

class itemCluster extends React.Component {

    WholeNews() {
        const cluster = this.props.data;
        const wdth = 30;
        const border = 5;
        const ico = 25;
        /*        let Range = [1, 2 ,3 , 4 , 5, 6 ,7 , 8 , 9 , 10, 11, 12, 13, 14];*/

        let numbers = cluster.z1;

        return numbers.map(function(number){
            if (number.host[3] === '7') {
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
    container: {
        flex: 1,
        flexDirection: 'column',
        width: theme.width,
        height: theme.height,
        zIndex: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    text: {
        fontFamily: 'Futura-medium',
        fontSize: 15,
        color: 'white',
        textTransform: 'uppercase',
        marginBottom: theme.width / 4
    },
    loader: {
        position: 'absolute',
    },
    loading: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(itemCluster)