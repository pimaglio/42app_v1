import React from 'react'
import {StatusBar, StyleSheet, View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {theme} from "../constants";
import {connect} from "react-redux";
import {CardZone, HeaderZoneTitle, Zone1Block} from "../components";
import {bindActionCreators} from "redux";
import fetchmyProfile from "../actions/fetchMyProfile";
import fetchAllLocation from "../actions/fetchLocation";
import fetchLogTime from "../actions/fetchLogTime";


class ClusterZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <HeaderZoneTitle zone={navigation.getParam('zone')} navig={navigation}/>
        }
    };

    _navigate = () => {
     this.props.navigation.navigate('App');
    };

    render() {

        const duration = 100;

        return (
            <View duration={duration} style={styles.mainContainer}>
                <Zone1Block/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingLeft: 10,
        flex: 1,
        backgroundColor: '#fafafa',
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
