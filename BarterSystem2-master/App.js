import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/loginscreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

export default function App() {
  return (
   <AppContainer/>
      
  );
}
const switchnavigator=createSwitchNavigator({
 LoginScreen:{screen:LoginScreen},
 
  })
  const AppContainer=createAppContainer(switchnavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
