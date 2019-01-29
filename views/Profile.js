import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

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

export default class Profile extends Component {

    componentDidMount(){
        StatusBar.setHidden(true);
    }

    static navigationOptions = ({navigation}) => ({
        title: "Home",
        headerLeft: <Icon name="ios-menu" style={{paddingleft: 10}} onPress={() => navigation.navigate('DrawerOpen')}/>,
        drawerLabel: 'Profile',
        drawerIcon: ({ tintcolor }) => (
            <Image
                source={require('../assets/prof.png')}
                style={styles.icon}
            />
        ),
    });

    render(){
        return(
            <View>
                <Text>Profile Screen</Text>
            </View>
        );
    }
}