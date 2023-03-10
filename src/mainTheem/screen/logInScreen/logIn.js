import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView, Image, ImageBackground, Dimensions } from 'react-native';
import InputField from '../../components/InputField';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import { Images } from '../../constants';
import { colors } from '../../constants/ColorScreen';

const { width, height } = Dimensions.get('screen');

const LogIn = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Images.Onboarding}
        style={styles.imageBackgroundContainer}
        imageStyle={styles.imageBackground}>
        <View style={{ padding: 10 }}>
          <View style={styles.mainContainer}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{ width: '100%', height: 240 }}
                source={Images.loginBanar} />
            </View>

            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 28,
                fontWeight: '500',
                color: '#333',
                marginBottom: 30,
              }}>
              Login
            </Text>

            <InputField
              label={'Email or Phone'}
              color={'#333'}
              pcolor={'#333'}
              icon={
                <Ionicons
                  name="phone-portrait-outline"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
            />
            <InputField
              color={'#333'}
              pcolor={'#333'}
              label={'Password'}
              icon={
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
            />

            <CustomButton label={"Sign in"} onPress={()=>navigation.navigate('Home')} />
            <TouchableOpacity onPress={()=>navigation.navigate('Register')} >
              <Text style={styles.createAccountStyle}>
                <Text style={styles.platformStyile}>New on our platform?</Text> Create an account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ textAlign: 'center', color: 'red', marginBottom: 30 }}>
                Forgot Password ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    alignItems: 'center'
  },
  imageBackgroundContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
    justifyContent: 'center',
  },
  imageBackground: {
    width: width,
    height: height
  },
  createAccountStyle: {
    textAlign: 'center',
    color: colors.screenBgMain,
    marginBottom: 30,
    fontSize: 15,
    fontWeight: '600'
  },
  platformStyile: {
    color: colors.gray
  },
  mainContainer: {
    backgroundColor: colors.white,
    padding: 10, borderRadius: 10,
    shadowColor: colors.screenBgMain,
    elevation: 5,
    shadowRadius: 10,
  }
})

export default LogIn;
