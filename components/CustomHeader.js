import React, {Component} from 'react';

import { DrawerNavigator } from 'react-navigation';

import {
    View,
    Text
} from 'react-native';

import {
    Icon,
    Button,
    Container,
    Header,
    Content,
    Left,
    Right,
    Body
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
                    <Text styles={{alignItems: 'center'}}>{this.props.title}</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name="more"/>
                    </Button>
                </Right>
            </Header>
        );
    }
}