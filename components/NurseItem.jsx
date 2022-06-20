import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconButton, Avatar } from 'react-native-paper'

const {height, width} = new Dimensions.get('screen')
const NurseItem = ({avatar, name, location, price, onPress}) => {
  return (
    <TouchableOpacity style={styles.nurseItem} onPress={onPress}>
        <Avatar.Image source={avatar} size={42} />
        <View style={styles.nameLocation}>
            <Text style={styles.nurseName}>{name}</Text>
            <Text style={styles.nurseLocation}>{location}</Text>
        </View>
        <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
  )
}

export default NurseItem

const styles = StyleSheet.create({
    nurseItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        marginTop: 10
    },
    nurseName: {
        fontWeight: '700',
        fontSize: 18,
    },
    nurseLocation: {
        color: 'gray',
        fontWeight: '500',
    },
    nameLocation: {
        width: '65%',
        alignItems: 'flex-start',
    },
    price: {
        color: 'red',
        fontSize: 18,
        fontWeight: '600',
        paddingRight: 20
    }


})