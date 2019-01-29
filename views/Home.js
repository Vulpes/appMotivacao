'use strict';
import React, {Component} from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput,
    Image
} from 'react-native';
import { createStackNavigator, NavigationActions, StackActions } from 'react-navigation';

import {
    Icon, 
    Button, 
    Container, 
    Header, 
    Content, 
    Left,
    Body
} from 'native-base';

import styles from '../styles/home';

import CustomHeader from '../components/CustomHeader';

export default class Home extends Component {
    constructor(props){
        super(props);

        const { navigate } = this.props.navigation;

        this.state = {
            login: "Login",
            senha: ""
        }

    }

    static navigationOptions = ({navigation}) => ({
        title: "Home",
        headerLeft: <Icon name="ios-menu" style={{paddingleft: 10}} onPress={() => navigation.navigate('DrawerOpen')}/>,
        drawerLabel: 'Home',
        drawerIcon: ({ tintcolor }) => (
            <Image
                source={require('../assets/home.png')}
                style={styles.icon}
            />
        ),
    });

    componentDidMount(){
        StatusBar.setHidden(true);
    }

    render(){
        return(
            <View style={styles.viewContainer}>
                <CustomHeader title='Home' drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

                <Content contentContainerStyle={styles.content}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Profile')}
                        full
                    >
                        <Text>Go to Profile screen</Text>
                    </Button>
                </Content>
            </View>
        );
    }
}
