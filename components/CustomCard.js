import React, { Component } from 'react';

import {
    Text,
    View,
    Image
} from 'react-native';

import {
    Icon, 
    Button, 
    Container, 
    Header, 
    Content, 
    Left,
    Body,
    Card,
    Thumbnail,
    CardItem,
    Right
} from 'native-base';

export default class CustomCard extends Component{

    render(){
        return(
            <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: this.props.logo}} />
                                <Body>
                                    <Text>{this.props.theme}</Text>
                                    <Text style={{color: 'grey', fontSize: 10}}>{this.props.author}</Text>
                                    </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: this.props.img}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
            </Content>
        );
    }

}