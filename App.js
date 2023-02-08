import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import ThemeOneStack from './src/themeOne/navigation/ThemeOneStack';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <ThemeOneStack />
    </NavigationContainer>
  );
};

export default App;
