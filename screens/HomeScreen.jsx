import { StyleSheet, Text, View, Dimensions, Image, SafeAreaView } from 'react-native'
import React from 'react'
import homeImage from "../assets/homeImage.png"
import NurseList from '../components/NurseList'

const {height, width} = new Dimensions.get('screen')

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.homeScreen}>
      <Image
          source={homeImage}
          style={{ width, height: 168, marginTop: 3 }}
      />
      <NurseList navigation={navigation}/>
    </SafeAreaView>
  ) 
}

export default HomeScreen

const styles = StyleSheet.create({
  homeScreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height,
    width,
    backgroundColor: 'F1F1F1',
  }
  
})