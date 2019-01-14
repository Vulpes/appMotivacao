import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

//screens
import Home from './views/Home';
import Profile from  './views/Profile';


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
      activeTintColor: '#233237',
      inactiveTintColor: '#18121E'
    },
    cardStyle:{
      backgroundColor: '#18121E'
    },
  }
);

export default createAppContainer(App);
