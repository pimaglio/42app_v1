import React from 'react'
import {StatusBar, StyleSheet, View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {theme} from "../constants";
import {connect} from "react-redux";
import {CardZone, HeaderLocationTitle} from "../components";
import {bindActionCreators} from "redux";
import fetchmyProfile from "../actions/fetchMyProfile";
import {nbrUsersZone, availablePlace, totalUser} from '../actions/cluster';
import fetchAllLocation from "../actions/fetchLocation";
import fetchLogTime from "../actions/fetchLogTime";
import FadeInView from "../components/fadeAnim";


class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <HeaderLocationTitle navig={navigation}/>
        }
    };

    _navigate = () => {
        this.props.navigation.navigate('App');
    };

    render() {
        const cluster = this.props.allLocation;
        let totaluser = totalUser(cluster.z1, cluster.z2, cluster.z3, cluster.z4);

        const duration = 100;

        return (
            <View duration={duration} style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <Ionicons name="md-people" size={50} color={theme.colors.primary}/>
                    <Text style={styles.title}>USER CONNECTED: {' '}
                        <Text style={{color: theme.colors.primary, fontFamily: 'Futura-bold',}}>{totaluser} </Text>
                    </Text>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => console.log('ok')
                    }
                    >
                        <CardZone
                            zone={'z1'}
                            nbrUser={nbrUsersZone(cluster.z1)}
                            Available={availablePlace(cluster.z1, 1)}
                        />
                    </TouchableOpacity>
                    <CardZone
                        zone={'z2'}
                        nbrUser={nbrUsersZone(cluster.z2)}
                        Available={availablePlace(cluster.z2, 2)}
                    />
                    <CardZone
                        zone={'z3'}
                        nbrUser={nbrUsersZone(cluster.z3)}
                        Available={availablePlace(cluster.z3, 3)}
                    />
                    <CardZone
                        zone={'z4'}
                        nbrUser={nbrUsersZone(cluster.z4)}
                        Available={availablePlace(cluster.z4, 4)}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    topContainer: {
        maxHeight: 100,
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    container: {
        paddingHorizontal: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    title: {
        fontFamily: 'Futura-medium',
        fontSize: 20,
        color: 'black'
    }
});

function mapStateToProps(state) {
    return {
        myProfile: state.myProfile,
        allLocation: state.allLocation
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({fetchmyProfile, fetchAllLocation, fetchLogTime}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)
