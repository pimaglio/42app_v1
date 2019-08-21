import React from 'react'
import {StatusBar, StyleSheet, View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {theme} from "../constants";
import {connect} from "react-redux";
import {CardZone, HeaderZoneTitle} from "../components";
import {bindActionCreators} from "redux";
import fetchmyProfile from "../actions/fetchMyProfile";
import {nbrUsersZone, availablePlace, totalUser} from '../actions/cluster';
import fetchAllLocation from "../actions/fetchLocation";
import fetchLogTime from "../actions/fetchLogTime";
import FadeInView from "../components/fadeAnim";


class ClusterZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <HeaderZoneTitle navig={navigation}/>
        }
    };

    _navigate = () => {
     this.props.navigation.navigate('App');
    };

    render() {
        console.log(this.props.navigation.getParam());

        const duration = 100;

        return (
            <View duration={duration} style={styles.mainContainer}>
                <View style={styles.topContainer}>
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({fetchmyProfile, fetchAllLocation, fetchLogTime}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClusterZone)
