import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image
} from 'react-native';
import {
    List,
    ListItem,
    Icon
} from 'native-base';

import CustomHeader from '../components/CustomHeader';

export default class Contacts extends Component{

    static navigationOptions = ({navigation}) => ({
        title: "Contacts",
        headerLeft: <Icon name="ios-menu" style={{paddingleft: 10}} onPress={() => navigation.navigate('DrawerOpen')}/>,
        drawerLabel: 'Contacts',
        drawerIcon: ({ tintcolor }) => (
            <Image
                source={require('../assets/prof.png')}
                style={styles.icon}
            />
        ),
    });

    constructor(props){
        super(props);
        const { navigate } = this.props.navigation;

        this.state = {
           

        }
    }

    render(){
        return(
            <View>
                <View>
                    <CustomHeader title='Contacts' drawerOpen={() => this.props.navigation.navigate('DrawerOpen')}/>
                </View>
                <View>
                    <List>
                        <ListItem itemDivider> 
                            <Text>A</Text>
                        </ListItem>
                        
                    </List>
                </View>
            </View>
        );
    }

}