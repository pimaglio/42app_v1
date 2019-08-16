import React from 'react';
import {StyleSheet, Text, View, ProgressViewIOS} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Progress from '../components/Progress';

import {connect} from 'react-redux'
import {theme} from "../constants";

class LevelBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _setProgress = (level) => {
        let regex = /[^.]*$/g,
            match;
        match = regex.exec(level);
        let i = match[0];
        if (i <= 9) {
            let regex = /[^0]*$/g,
                match2;
            match2 = regex.exec(i);{}
            return '0' + match2[0];
        }
        else
            return match[0];
    };

    render() {
        const level = this.props.level.level;
        const progress = '0.' + this._setProgress(level);
        const xp = this._setProgress(level);
        return (
            <View style={styles.container_level}>
                <Text style={styles.titleLevel}>
                    <Ionicons name="md-trending-up" size={20} color='black'/>
                    {" "} Level{" "}
                    <Text style={{color: theme.colors.primary}}>
                        {level}
                    </Text>
                </Text>
                <Progress xp={progress} xpP={xp}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container_level: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleLevel: {
        fontFamily: 'Futura-bold',
        fontSize: 18,
        color: 'black',
        textTransform: 'uppercase',
        marginRight: 10
    }
});

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(LevelBlock)
