import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { Avatar } from 'react-native-paper'
import React, { useEffect } from 'react'

const {height, width} = new Dimensions.get('screen')

const OnboardScreen = ({route, navigation}) => {
    useEffect(() => {
        setTimeout(skip)
    }, [])

    const skip = () => navigation.navigate('Login')

    return (
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 30, height: 500, marginTop: 35 }}>
            <View style={{alignSelf: 'flex-end', width: 30, height: 30}}>
                <Text style={{fontSize: 18}} onPress={skip}>Skip</Text>
            </View>
            <Image source={require('../assets/hi.png')}/>
            <Text style={{fontWeight: '700', fontSize: 40}}>Hi There!</Text>
            <Text style={{fontSize: 16}}>This is Lox Service app development test!</Text>
        </View>
    )
}

export default OnboardScreen

const styles = StyleSheet.create({})