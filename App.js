import React, { useEffect } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <View>
      <Text>Amit</Text>
    </View>
  );
}

const styles = StyleSheet.create({})

export default App;
