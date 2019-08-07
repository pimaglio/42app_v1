import React from 'react';
import {ActivityIndicator, ImageBackground, StyleSheet, Text, View} from "react-native";
import {theme} from "../constants";
import FadeInView from "../components/fadeAnim";

class Loading extends React.Component {

    render() {
        const time = 1000;
        return (
            <FadeInView duration={time}>
                <ImageBackground
                    source={require('../assets/bg_loading.png')}
                    style={styles.container}
                >
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="white" style={styles.loader}/>
                        <View style={styles.container}>
                            <Text style={styles.text}>Préparation de la fusée</Text>
                        </View>
                    </View>
                </ImageBackground>
            </FadeInView>
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

export default Loading
