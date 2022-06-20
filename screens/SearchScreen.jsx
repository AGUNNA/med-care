import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const {height, width} = new Dimensions.get('screen')
const SearchScreen = () => {
  return (
    <View style={styles.searchScreen}>
      <Text>Search</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  searchScreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height,
  }
})