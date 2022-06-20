import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
import { Button, IconButton } from 'react-native-paper'

const {height, width} = new Dimensions.get('screen')

const ApprovedScreen = ({route, navigation}) => {
  return (
    <SafeAreaView>
        <View style={{ display: 'flex' , flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: 520}}>
            <IconButton icon={'check-circle'} color='white' size={100} style={{ backgroundColor: '#05C88D'}}/>
            <Text style={{fontWeight: '700', fontSize: 28}}>Done</Text>
            <Button mode="outlined" style={{borderStyle: 'dashed',borderWidth: 2 ,borderColor: '#3E3E50',width: 326, height: 38, alignItems: 'center', justifyContent: 'center', marginTop: 20}} color= '#3E3E50' onPress={() => navigation.navigate('Home', { screen: 'Appointments'})}>View Appointments</Button>
        </View>
    </SafeAreaView>
  )
}

export default ApprovedScreen

const styles = StyleSheet.create({})