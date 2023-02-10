import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import CustomHeader from '../../components/CustomHeader';

const Dashboard = () => {
    return (
        <SafeAreaView style={styles.container}>
        <CustomHeader label={'Dashboard'}/>
            <ScrollView style={{padding:10}}>
                <View>
                    <Text>Amit</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

export default Dashboard;
