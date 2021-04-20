import React from 'react';
import { createAppComponent, createAppContainer } from  'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './src/screens/MainScreen'
import {StyleSheet} from 'react-native'


const navigator = createStackNavigator({
  Main : MainScreen,
},
{
  initialRouteName: 'Main',
  defaultNavigationOptions : {
    title: 'Main'
  },
  screenOptions :{
    headerStyle: { elevation: 0 },
    cardStyle: { backgroundColor: 'red' }}
  }
);

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'red'
  }
})



export default createAppContainer(navigator);

