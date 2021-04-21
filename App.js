import React from 'react';
import { createAppComponent, createAppContainer } from  'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './src/screens/MainScreen'
import Intro from './src/screens/Intro'
import {StyleSheet} from 'react-native'


const navigator = createStackNavigator({
  Intro : Intro,
  Main : MainScreen,
},
{
  initialRouteName: 'Intro',
  defaultNavigationOptions : {
    title: 'Main',
    
  },
  screenOptions :{
    headerStyle: { elevation: 0 },
    cardStyle: { backgroundColor: 'gray' }}
  }
);

export default createAppContainer(navigator);

