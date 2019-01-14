import React, {Component} from 'react';
import {
    View,
    Text,
    Statusbar
} from 'react-native';

export default class Profile extends Component {

    componentDidMount(){
        StatusBar.setHidden(true);
    }
    
    render(){
        return(
            <View>
                <Text>Profile Screen</Text>
            </View>
        );
    }
}