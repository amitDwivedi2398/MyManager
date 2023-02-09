import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView, Image, ImageBackground, Dimensions } from 'react-native';
import InputField from '../../components/InputField';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import { colors } from '../../ColorScreen';
import { Images } from '../../constants';

const { width, height } = Dimensions.get('screen');

const LogIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground  
      source={Images.Onboarding}
      style={styles.imageBackgroundContainer}
      imageStyle={styles.imageBackground}>
       <View style={{padding:10}}>
       <View style={{backgroundColor:colors.white,padding:10,borderRadius:10,shadowColor: colors.screenBgMain,
        elevation: 5,
        shadowRadius: 10, }}>
          <View style={{ alignItems: 'center' }}>
            <Image style={{ width: '100%', height: 240 }} source={require('../../assets/image/logIn/login.png')} />
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

          <CustomButton label={"Login"} />
          <TouchableOpacity  >
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
    alignItems:'center'
  },
  imageBackgroundContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
    justifyContent:'center',
  },
  imageBackground: {
    width: width,
    height: height
  },
  otp: {
    borderWidth: 1,
    borderStyle: 'solid',
    color: 'black',
    // padding: '0%',
    height: 50,
    width: 50,
    // justifyContent: 'center',
    // marginRight: 10,
    // alignItems: 'center',
    borderRadius: 10,
    borderColor: '#D2D5DC',
  },
  otpContainer: {
    color: 'black',
    padding: '1%',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
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
  }
})

export default LogIn;
