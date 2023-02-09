import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingSlider from '../screen/onbordingScreen/OnboardingSlider';
import LogIn from '../screen/logInScreen/logIn';


const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="OnboardingSlider" component={OnboardingSlider} options={{ headerShown: false }} />
        <Stack.Screen name="logIn" component={LogIn} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default MainStack;
