import React from 'react';
import MainScreen from './src/screens/MainScreen';
import Intro from './src/screens/Intro';
import {
  createModalNavigator,
  ModalScreenProps,
} from 'react-navigation-native-modal';
import { NavigationContainer } from '@react-navigation/native';

const Modal = createModalNavigator();

export default function App()  {
  return (
    <NavigationContainer>
    <Modal.Navigator>
      <Modal.Screen 
        name="Intro" 
        component={Intro} 
        options={{
            animationType: 'fade'}}/>
      <Modal.Screen 
        name="MainScreen" 
        component={MainScreen}
        options={{
            animationType: 'fade'}} />
    </Modal.Navigator>
    </NavigationContainer>
  );
}




// const navigator = createStackNavigator({
//   Welcome : MainScreen,
// },
// {
//   initialRouteName: 'Welcome',
//   defaultNavigationOptions : {
//     title:'Welcome',
//   },
//   screenOptions :{
//     headerStyle: { elevation: 0 },
//     cardStyle: { backgroundColor: 'gray' }},
//     animationEnabled: false,
//   }
// );

// export default createAppContainer(navigator);
