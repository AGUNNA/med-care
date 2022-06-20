import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Footer from '../components/Footer'
import AllAppointmentsScreen from '../screens/AllAppointmentsScreen'
import AppointmentScreen from '../screens/AppointmentScreen'
import AppointmentsScreen from '../screens/AppointmentScreen'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SearchScreen from '../screens/SearchScreen'
import HomeNavigator from './HomeNavigator'

const Tab = createBottomTabNavigator()
const FooterNavigator = () => {
    return (
        <Tab.Navigator //wrapper component that contains all routes
            tabBar={(props)=> <Footer {...props}/>} initialRouteName='Home'
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen 
                name='Home' //routes available for navigation in the footer
                component={HomeNavigator} 
                initialParams={{icon: 'home'}}
            />
            <Tab.Screen 
                name='Search'
                component={SearchScreen}
                initialParams={{icon: 'magnify'}} 
            />
            <Tab.Screen 
                name='Appointments'
                component={AllAppointmentsScreen}
                initialParams={{icon: 'clipboard-text'}} 
            />
            <Tab.Screen 
                name='Profile'
                component={ProfileScreen}
                initialParams={{icon: 'account'}} 
            />
        </Tab.Navigator>
    )
}

export default FooterNavigator
