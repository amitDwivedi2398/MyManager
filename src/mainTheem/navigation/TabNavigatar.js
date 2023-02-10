import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView, Image, ImageBackground, Dimensions } from 'react-native';

import Dashboard from '../screen/Homecreen/Dashboard';
import Shop from '../screen/shopScreen/Shop';
import Setting from '../screen/settingsScreen/Setting';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../constants/ColorScreen';
import AppIcon,{ Icons } from '../components/AppIcon';

const Tab = createBottomTabNavigator();

const TabNavigatar = ({navigation}) => {
    const BottomTab = ({ type, color, size = 24, isFocused, index }) => {
        const icon = index == 0 ? 'basket' : 'heart';
        const gradient = index == 1;
        return (
          <View>
            {gradient ? (
              <LinearGradient
                colors={[colors.light, colors.dark]}
                start={{ x: isFocused ? 0 : 1, y: 0 }} end={{ x: isFocused ? 1 : 0, y: 0 }}
                style={styles.middleIcon}>
                <AppIcon name={'home'} type={type} size={size} color={'white'} />
              </LinearGradient>
            ) : (
              <View style={styles.icon}>
                <AppIcon name={icon} type={type} size={size} color={color} />
              </View>
            )}
          </View>
        )
      }
      const MyTabBar = ({ state, descriptors, navigation }) => {
        return (
          <View
            style={styles.bottomBar}>
            {state.routes.map((route, index) => {
              const isFocused = state.index === index;
              const { options } = descriptors[route.key];
      
              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                })
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }
      
              const color = isFocused ? colors.light : colors.dark;
      
              return (
                <TouchableOpacity
                  key={index}
                  onPress={onPress}
                  testID={options.tabBarTestID}
                  accessibilityRole="button"
                >
                  <BottomTab
                    type={index !== 1 ? Icons.MaterialCommunityIcons : Icons.FontAwesome5}
                    index={index}
                    isFocused={isFocused}
                    size={24}
                    color={color}
                  />
                </TouchableOpacity>
              )
            })}
          </View>
        )
      }
  return (
    <Tab.Navigator initialRouteName='Home'
     tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Home" component={Dashboard} options={{headerShown:false}} />
      <Tab.Screen name="Setting" component={Setting}/>
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
    bottomBar: {
      height: 60,
      backgroundColor: 'white',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    middleIcon: {
      bottom: 18,
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.6,
      elevation: 8,
    }
  });
  

export default TabNavigatar;
