import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

const FeedbackItem = ({userImg, username, message}) => {
  return (
    <View style={styles.feedbackItem}>
      <Avatar.Image source={userImg} size={24}/>
      <View style={styles.feedbackDetails}>
        <Text style={styles.feedbackUserName}>{username}</Text>
        <Text style={styles.feedbackMessage}>{message}</Text>
      </View>
    </View>
  )
}

export default FeedbackItem

const styles = StyleSheet.create({
  feedbackItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 10
    
  },
  feedbackDetails: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    marginHorizontal: 20,
    
  },
  feedbackUserName:{
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 20,
    color: '#091F44'
  },
  feedbackMessage:{
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 18,
    color: '#091F44'
  }
})