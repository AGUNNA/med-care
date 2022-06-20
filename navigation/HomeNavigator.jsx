// import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import NurseProfileScreen from '../screens/NurseProfileScreen'
import { IconButton } from 'react-native-paper'
import AppointmentScreen from '../screens/AppointmentScreen'
import PaymentScreen from '../screens/PaymentScreen'
import ApprovedScreen from '../screens/ApprovedScreen'
import PaystackScreen from '../screens/PaystackScreen'
import AllAppointmentsScreen from '../screens/AllAppointmentsScreen'

const HomeNavigator = () => {
    const Stack = createNativeStackNavigator() 
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='HomeScreen' 
            component={HomeScreen}
            options={{
                headerShown: false
            }}
            
        />
        <Stack.Screen 
            name='NurseProfile' 
            component={NurseProfileScreen}
            options={{
                title: 'Profile',
                headerRight: () => (
                    <IconButton 
                        icon='email'
                        color='#1648CE' 
                        size={26} 
                        style={{
                            marginHorizontal: 0,
                            marginTop: 0,
                            paddingLeft: 10
                            // marginRight: 10
                        }}
                    />
                ),
                headerBackTitle: '',
                headerTransparent: true
            }}
        />
        <Stack.Screen 
            name='AppointmentScreen' 
            component={AppointmentScreen}
            options={{
                headerBackTitle: '',
                headerTransparent: true,
                headerTitle: '',
            }}
        />

        <Stack.Screen 
            name='Payment' 
            component={PaymentScreen}
            options={{
                headerShown: true,
                headerBackTitle: '',
                headerTransparent: true,
                headerTitle: '',
            }}   
        />

        <Stack.Screen 
            name='Paystack' 
            component={PaystackScreen}
            options={{
                headerShown: true,
                headerBackTitle: '',
                headerTransparent: true,
                headerTitle: '',
            }}   
        />

        <Stack.Screen 
            name='Approved' 
            component={ApprovedScreen}
            options={{
                headerShown: true,
                headerBackTitle: '',
                headerTransparent: true,
                headerTitle: '',
            }}   
        />

        <Stack.Screen 
            name='Appointments' 
            component={AllAppointmentsScreen}
            options={{
                headerShown: true,
                headerBackTitle: '',
                headerTransparent: true,
                headerTitle: '',
            }}   
        />

    </Stack.Navigator>
    
  )
}

export default HomeNavigator