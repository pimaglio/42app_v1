import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {theme} from "../constants";
import {Ionicons} from '@expo/vector-icons';
import { connect } from 'react-redux'
import FadeInView from "./fadeAnim";
import fetchmyProfile from "../actions/fetchMyProfile";
import {bindActionCreators} from "redux";

class HeaderZoneTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isLoading: true
        }
    }

    _navigate = () => {
        this.props.navig.navigate('App');
    };

    render() {
        const time = 800;

        return (
                <FadeInView duration={time} style={styles.container}>
                    <TouchableOpacity style={styles.containerLogo} onPress={this._navigate}>
                        <Ionicons name="md-home" size={25} color={theme.colors.primary}/>
                    </TouchableOpacity>
                    <View style={styles.containerCenter}>
                        <Text style={styles.title}>
                            ZONE{"\t"}
                            <Text style={styles.login}>
                                ZONE
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.containerLogo}>
                        <Text>OK</Text>
                    </View>
                </FadeInView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerLogo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCenter: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Futura-medium',
        fontSize: 20,
        color: 'white'
    },
    login: {
        fontFamily: 'Futura-bold',
        fontSize: 20,
        color: theme.colors.primary
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
        ...bindActionCreators({fetchmyProfile}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderZoneTitle)
