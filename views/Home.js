'use strict';
import React, {Component} from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput
} from 'react-native';
import { createStackNavigator, NavigationActions, StackActions } from 'react-navigation';

import styles from '../styles/home';

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
        header: null,
    });

    componentDidMount(){
        StatusBar.setHidden(true);
    }

    render(){
        return(
            <View style={styles.viewContainer}>    
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder={this.state.login}
                        onChangeText={(login) => this.setState({login})}
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder={"Senha"}
                        onChangeText={(senha) => this.setState({senha})}
                    />
                </View>
            </View>
        );
    }
}
