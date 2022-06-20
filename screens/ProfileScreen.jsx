import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const {height, width} = new Dimensions.get('screen')
const ProfileScreen = () => {
  return (
    <View style={styles.profileScreen}>
      <Text>Profile</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  profileScreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height,
  }
})