import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import FooterTab from './FooterTab';

const {width} = Dimensions.get('screen')

const Footer = ({state, navigation}) => {
    const {routes} = state;
    const [selected, setSelected] = useState('') //variable to keep track of what page/route a user is on
    const renderColor = currentTab => (currentTab === selected ? '#1648CE' : '#929CAD') //function that changes the color of a footer icon based on whether it is the current page

    useEffect(()=> {
        routes.map((route)=> setSelected('Home'))
    }, [])

    const handlePress = (activeTab, index) => {  //this function handles user taps on the footer icons
        setSelected(activeTab);
        navigation.navigate(activeTab)  //function that handles the navigation
    }
    return (
        <View style={styles.footerContainer}>
           {routes.map((route, index) => ( //renders the footer tabs on the footer
                <FooterTab 
                tab={route}
                icon={route.params.icon}
                onPress={() => handlePress(route.name, index)}
                color={renderColor(route.name)}
                key={route.key}
                route={route.name}
                />
            ))}
        </View>
        
    )
}

export default Footer

const styles = StyleSheet.create({
    footerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 70,
        padding: 5,
        paddingBottom: 10,
        width,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
})
