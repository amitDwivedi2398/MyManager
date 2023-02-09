
import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/mainTheem/navigation/MainStack';



const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
    <MainStack />
    {/* <ThemeOneStack /> */}
  </NavigationContainer>
  );
};

export default App;
