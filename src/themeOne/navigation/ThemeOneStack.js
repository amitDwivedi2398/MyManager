import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoard from '../components/dashboard/DashBoard';
import Contact from '../components/contact/Contact';

const Stack = createNativeStackNavigator();

const ThemeOneStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashBoard"
        component={ThemeOneDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const ThemeOneDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="DashBoard">
      <Drawer.Screen name="DashBoard" component={DashBoard} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
};

export default ThemeOneStack;
