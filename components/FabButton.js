import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';

import { createStackNavigator, NavigationActions, StackActions } from 'react-navigation';
export default class FabButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  render() {
    return (
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#EAC67A', position: "absolute" }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="book" />
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="document" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }} 
              onPress={()=> NavigationActions.navigate({routeName: 'Contacts'})} 
            >
              <Icon name="contacts" />
            </Button>
          </Fab>
    );
  }
}