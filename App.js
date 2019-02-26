import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import {
  Container,
  Header,
  Body,
  Content
} from 'native-base';

import {
  StyleSheet,
  Image,
  View
} from 'react-native';

//screens
import Home from './views/Home';
import Profile from  './views/Profile';
import Login from './views/Login';
import Contacts from './views/Contacts';
import Register from './views/Register';

const App = createBottomTabNavigator(
  {
    Home: Home,
    Profile: Profile,
  }, 
  {
    defaultNavigationOptions:{
      headerTintColor: '#18121E',
      headerStyle: {
        backgroundColor: '#233237'
      },
    },
    tabBarOptions:{
      activeTintColor: '#984B43',
      inactiveTintColor: '#EAC67A',
      backgroundColor: '#18121E'
    },
  }
);


const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/perf.jpg')} />
      </Body>
    </Header>
    <Content contentContainerStyle={styles.content}>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    },
    Profile:{
      screen: Profile
    },
    Contacts:{
      screen: Contacts
    },
    Register: {
      screen: Register
    }
  },
  {
    initialRouteName:'Register',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
);


styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  drawerImage: {
    height:150,
    width:150,
    borderRadius: 75
  },

  drawerHeader:{
    height:200,
    backgroundColor:'#984B43'
  },
  content:{
    backgroundColor: '#EAC67A',
    height: '100%'
  }
})

const MyApp = createAppContainer(MyDrawerNavigator);
const MyAppBottom = createAppContainer(App);

export default MyApp;
//export default createAppContainer(App);

