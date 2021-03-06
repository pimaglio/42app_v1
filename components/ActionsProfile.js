import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {connect} from 'react-redux'
import {theme} from "../constants";

class ActionsProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.blockActions}>
                <Ionicons name="md-call" size={32} color={theme.colors.primary} />
                <Ionicons name="md-text" size={32} color={theme.colors.primary} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    blockActions: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
    },
});

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(ActionsProfile)
