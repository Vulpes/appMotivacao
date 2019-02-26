'use strict';
import React, {Component} from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput,
    ImageBackground
} from 'react-native';
import { createStackNavigator, NavigationActions, StackActions, createDrawerNavigator } from 'react-navigation';

import styles from '../styles/login';

export default class Login extends Component {
    constructor(props){
        super(props);

        const { navigate } = this.props.navigation;

        this.state = {
            senha: "",
            log: "",
            confLogin: 'admin@admin.com',
            confSenha: 'admin123'
        }

    }

    static navigationOptions = ({navigation}) => ({
        drawerLabel: () => null,
        drawerLockMode: 'locked-closed'
    });

    componentDidMount(){
        StatusBar.setHidden(true);
    }

    render(){
        return(

            <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>    
                <View style={styles.viewContainer}>
                    <View style={styles.containerInput}>
                        <TextInput
                            style={styles.input}
                            placeholder={"teste@teste.com"}
                            onChangeText={(login) => this.setState({log: login})}
                            multiline={false}
                        />
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            placeholder={"Senha"}
                            onChangeText={(senha) => this.setState({senha})}
                            multiline={false}
                        />

                        <TouchableOpacity
                            onPress={() => this._verifyLogin()}
                        >
                            <Text>Logar</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </ImageBackground>
        );
    }

    _verifyLogin = () =>{
        if(this.state.senha === this.state.confSenha){
            if(this.state.log === this.state.confLogin){
                this.props.navigation.dispatch(
                    NavigationActions.navigate({
                        routeName: 'Home'
                    })
                );
            }
            
        }else{
            alert('Login ou Senha incorretos!');
        }
    }
}
