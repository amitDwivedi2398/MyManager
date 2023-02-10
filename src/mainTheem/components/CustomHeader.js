import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const CustomHeader = ({onPress,label}) => {
    const navigation = useNavigation('');
    return (
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <View
                style={{
                    flexDirection: 'row',
                    padding:7,
                    borderColor:'#4584FF',
                    alignItems:'center'
                }}>
                <TouchableOpacity  onPress={() => navigation.openDrawer()}>
                    <AntDesign name="bars" color={'#4584FF'} size={25} />
                </TouchableOpacity>
                <Text style={{color:'#6E6E6E',fontFamily:'Roboto-Bold',fontSize:18,marginLeft:30}}>{label}</Text>
            </View>
            <View style={{
                    flexDirection: 'row',
                    padding:7,
                    borderColor:'#4584FF',
                    alignItems:'center'
                }}>
            <TouchableOpacity  onPress={() => navigation.openDrawer()}>
                    <AntDesign name="bars" color={'#4584FF'} size={25} />
                </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.openDrawer()}>
                    <AntDesign name="bars" color={'#4584FF'} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default CustomHeader;
