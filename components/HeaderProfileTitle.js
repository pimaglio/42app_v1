import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from "../constants";

import { connect } from 'react-redux'
import FadeInView from "./fadeAnim";
import { LinearGradient } from 'expo-linear-gradient';


class LogoTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isLoading: true
        }
    }

    render() {
        const time = 800;

        return (
                <FadeInView duration={time} style={styles.container}>
                    <Text style={styles.title}>
                        Hi,{"\t"}
                        <Text style={styles.login}>
                            {this.props.myProfile.login}
                        </Text>
                        <Text style={styles.title}> !</Text>
                    </Text>
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

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps) (LogoTitle)
