import React from 'react'
import {StatusBar, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {theme} from "../constants";
import {connect} from "react-redux";
import {Loading, FadeInView, LevelBlock, InfosBlock, AgendaBlock, HeaderProfileTitle, PictureInfos} from "../components";
import {bindActionCreators} from "redux";
import fetchmyProfile from "../actions/fetchMyProfile";
import {Ionicons} from '@expo/vector-icons';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    static navigationOptions = {
        headerTitle: <HeaderProfileTitle/>,
    };

    goLocation = () => {
        this.props.navigation.navigate('Cluster')
    };

    render() {
        const {myProfile, isFetching} = this.props.myProfile;

        const duration = 1500;

        if (isFetching && !myProfile) {
            return (
                <View style={styles.container}>
                    <StatusBar hidden/>
                    <Loading/>
                </View>
            );
        }
        return (
            <FadeInView duration={duration} style={styles.container}>
                <StatusBar hidden/>
                <View style={styles.main_profile}>
                    <PictureInfos/>
                </View>
                <View style={styles.content_profile}>
                    <View style={[styles.blockLevel, styles.card]}>
                        <LevelBlock level={myProfile.cursus_users[0]}/>
                    </View>
                    <View style={[styles.blockInfo, styles.card]}>
                        <InfosBlock/>
                    </View>
                    <View style={[styles.blockAgenda, styles.card]}>
                        <AgendaBlock/>
                    </View>
                    <View style={styles.Cluster}>
                        <TouchableOpacity onPress={this.goLocation}>
                            <Ionicons name="md-git-network" size={40} color={theme.colors.primary}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </FadeInView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
    },
    card:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#f7f7f7',
        borderRadius: 3,
        marginVertical: 10
    },
    main_profile: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10
    },
    content_profile: {
        flex: 5,
        width: theme.width / 1.1
    },
    blockLevel: {
        flex: 1,
        maxHeight: 60
    },
    blockInfo: {
        flex: 1,
        maxHeight: 110
    },
    blockAgenda:{
        flex: 1
    },
    Cluster: {
        width: theme.width / 3,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleCluster: {
        fontFamily: 'Futura-book',
        fontSize: 20,
        color: 'white'
    }
});

function mapStateToProps(state) {
    return {
        myProfile: state.myProfile
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ fetchmyProfile }, dispatch)
    }
}

export default connect(mapStateToProps)(Home)
