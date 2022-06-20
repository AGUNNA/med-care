import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import anonyAvt from "../assets/anonymous.png"
import userAvt from "../assets/user.png"
import { Avatar, Button, IconButton } from 'react-native-paper';
import FeedbackItem from '../components/FeedbackItem';
// import AppointmentScreen from './AppointmentScreen';


const {height, width} = new Dimensions.get('screen')

const NurseProfileScreen = ({route, navigation}) => {

  const nurse = route.params

  return (
    <SafeAreaView style={styles.nurseProfileScreen}>
      <View style={styles.nurseProfileContainer}>
        <Avatar.Image source={nurse.avatar} />
        <View style={styles.profileRight}>
          <Text style={styles.profileName}>{nurse.name}</Text>
          <Text style={styles.profileTitle}>Nurse</Text>
          <View style={styles.profileBottom}>
            <IconButton style={{ backgroundColor: '#F5FAFF', margin: 0, marginRight: 10}} color='#1648CE' icon='account-group'/>
            <View style={styles.profileBottomRight}>
              <Text style={styles.profileTitle}>Patients</Text>
              <Text style={styles.profileName}>{nurse.patientsBooked}+</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView style={{height: height*0.6}}s>
        <View style={styles.nurseProfileCTA}>
          <View style={styles.profileNumbers}>
            <Text style={styles.profileName}>{nurse.articles}</Text>
            <Text style={styles.profileName}>{nurse.following}</Text>
            <Text style={styles.profileName}>{nurse.followers}</Text>
          </View>
          <View style={styles.profileDescriptions}>
            <Text style={styles.profileTitle}>Articles</Text>
            <Text style={styles.profileTitle}>Following</Text>
            <Text style={styles.profileTitle}>Followers</Text>
          </View>
          <View style={styles.profileCTA}>
            <Button style={styles.button} mode="contained" onPress={() => {}}>Follow</Button>
            <Button mode="outlined" style={{borderWidth: 0.8, borderColor: '#1648CE'}} onPress={() => {}}>Message</Button>
          </View>
        </View>

        <View style={styles.nurseFeedbackContainer}>
          <View style={styles.feedbackRatingsContainer}>
            <IconButton icon='star' style={{ backgroundColor: '#FEF8F4', borderRadius: 15, margin: 0 }} size={30} color='#EF802F' />
            <View style={styles.feedbackRatings }>
              <Text style={styles.profileTitle}>Rating</Text>
              <Text style={styles.profileName}>{nurse.ratings} out of 5</Text>
            </View>
            <View style={styles.feedbackRatingsBtn}>
              <Button icon='chevron-right' style={{borderRadius: 30,}} mode='contained' onPress={() => {}}>See all </Button>
            </View>
          </View> 
          
          <View style={styles.feedbackMessages}>
            {nurse.feedback.map((fb, index) => (
              <FeedbackItem 
              userImg={fb.userImg}
              key={index} 
              username={fb.username}
              message={fb.message}
              />,
              <FeedbackItem 
              userImg={fb.userImg}
              key={index} 
              username={fb.username}
              message={fb.message}
              />
            ))}
          </View>
        </View>
        <View style={styles.scheduleBtn}>
        <Button icon='calendar-clock' style={{borderRadius: 13}}  mode='contained' onPress={() => navigation.navigate('Home', {screen: 'AppointmentScreen', params: nurse })}>Make an Appointment</Button>
        </View>
      </ScrollView>
    
    </SafeAreaView>
    
  )
}

export default NurseProfileScreen

const styles = StyleSheet.create({
  nurseProfileScreen: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F1F1F1'
    
  },

  nurseProfileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 25,
    backgroundColor: 'white',
    height: 112,
    width: 343,
    marginTop: 5,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },

  profileRight: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 20

  },
  profileBottom: {
    flexDirection: 'row',
  },
  profileBottomRight: {
      flexDirection: 'column'
  },
  profileName: {
    fontWeight: '600',
    fontSize: 22,
    
  },
  profileTitle: {
    fontWeight: '400',
    fontSize: 16,
    color: '#091F44'
  },

  nurseProfileCTA: {
    display: 'flex',
    flexDirection: 'rows',
    justifyContent: 'space-around',
    padding: 15,
    height: 150,
    width: 343,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },

  profileNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profileDescriptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
    
  },
  profileCTA: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    borderRadius: 6
  },
  nurseFeedbackContainer: {
    // display: 'flex',
    flexDirection: 'rows',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    height: 320,
    width: 343,
    marginTop: 5,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },
  feedbackRatingsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    // alignContent: 'flex-start',
    justifyContent: 'space-between'
  },
  scheduleBtn: {
    flexDirection: 'rows',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    height: 65,
    width: 343,
    marginTop: 5,
    borderRadius: 16,
  }
})