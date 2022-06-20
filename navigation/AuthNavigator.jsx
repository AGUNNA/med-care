import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardScreen from '../screens/OnboardScreen'
import LoginScreen from '../screens/LoginScreen'

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Onboard' 
                component={OnboardScreen} 
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name='Login' 
                component={LoginScreen} 
                options={{
                    headerShown: false
                }} 
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator