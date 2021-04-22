import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './src/screens/MainScreen'
import Intro from './src/screens/Intro'
import {StyleSheet} from 'react-native'


const navigator = createStackNavigator({
  Welcome : Intro,
  Tarot : MainScreen,
},
{
  initialRouteName: 'Welcome',
  defaultNavigationOptions : {
    title:'Welcome',
    title: 'Tarot'
  },
  screenOptions :{
    headerStyle: { elevation: 0 },
    cardStyle: { backgroundColor: 'gray' }}
  }
);

export default createAppContainer(navigator);
