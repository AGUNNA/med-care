import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { IconButton } from 'react-native-paper'

const FooterTab = ({color, tab, onPress, icon, route}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon && <IconButton icon = {icon} size= {24} color= {color} />}
            <Text style={{color}}>{route}</Text>
        </TouchableOpacity>
    );
}

export default FooterTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    iconStyle: {
        marginTop: 40,
    },
    
})
