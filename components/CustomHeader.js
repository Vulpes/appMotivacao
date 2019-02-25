import React, {Component} from 'react';

import { DrawerNavigator } from 'react-navigation';

import {
    View,
    Text,
    Alert
} from 'react-native';

import {
    Icon,
    Button,
    Container,
    Header,
    Content,
    Left,
    Right,
    Body,
    Title
} from 'native-base';

export default class MenuL extends Component {

    render() {
        return(
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.drawerOpen()}>
                        <Icon name="ios-menu" onPress={() => this.props.drawerOpen()}/>
                    </Button>
                </Left>
                <Right/>
                <Body>
                    <Text style={{color: 'white', fontFamily:'Roboto', alignItems: 'center', fontSize: 20}}>{this.props.title}</Text>
                </Body>
                <Right>
                    <Button transparent onPress={() => alert('Teste')}>
                        <Icon name="more"/>
                    </Button>
                </Right>
            </Header>
        );
    }
}