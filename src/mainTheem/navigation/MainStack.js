import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OnboardingSlider from '../screen/onbordingScreen/OnboardingSlider';
import LogIn from '../screen/logInScreen/logIn';
import Register from '../screen/registerScreen/Register';
import Dashboard from '../screen/Homecreen/Dashboard';
import Contacts from '../screen/contacts/Contacts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigatar from './TabNavigatar';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnboardingSlider" component={OnboardingSlider} options={{ headerShown: false }} />
      <Stack.Screen name="logIn" component={LogIn} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={TabNavigatar} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
const MainStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#4584FF',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        elevation: 4,
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
          elevation: 5,
          shadowRadius: 10,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={AuthStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contacts"
        component={Contacts}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({})

export default MainStack;
