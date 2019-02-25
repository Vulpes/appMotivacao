'use strict';
import React, {Component} from 'react';
import { 
    View,
    TouchableOpacity,
    StatusBar,
    TextInput,
    Image,
    Text, 
    ScrollView
} from 'react-native';
import { createStackNavigator, NavigationActions, StackActions } from 'react-navigation';

import {
    Icon,
} from 'native-base';

import styles from '../styles/home';

import CustomHeader from '../components/CustomHeader';
import CustomCard from '../components/CustomCard';
import FabButton from '../components/FabButton';

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
            <View style={{flex: 1}}>
                <CustomHeader title='Home' drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
                <View style={{flex: 3}}>
                    <ScrollView style={styles.scrollView}>
                    
                        <View style={{ alignItems: 'center', paddingTop:5 }}>
                            <View style={styles.viewTittle}>
                                <Text style={styles.text}>Notícias do Dia</Text>
                            </View>
                        </View>
                

                        <CustomCard author="VulpesMacrotiss" theme="Background" 
                            img="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg" 
                            logo="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1a/1a4ec32b3d32af216a84744170ab128c77e86a62_medium.jpg" 
                        />
                        <CustomCard author="Anonymous" theme="Attack the System" 
                            img="https://udemy-images.udemy.com/course/750x422/875976_045e_3.jpg" 
                            logo="https://cache.olhardigital.com.br/uploads/acervo_imagens/2015/11/20151118073946_660_420.jpg" 
                        />
                        
                        
                    </ScrollView>
                    <View style={{position: 'relative', left: 0, right:0 }}>
                        <FabButton/>
                    </View>
                </View>
                
                
                
            </View>
            
        );
    }
}
