import { StyleSheet, Text, SafeAreaView,View, Dimensions, ScrollView, } from 'react-native'
import React, {useEffect} from 'react'
import { Avatar, Button, IconButton } from 'react-native-paper'
import HorizontalCalendar from '../components/HorizontalCalender'
import TimeScheduler from '../components/time-scheduler'

const {height, width} = new Dimensions.get('screen')

const AppointmentScreen = ({route, navigation}) => {
  const nurse = route.params

  return (

    <SafeAreaView style={styles.appointmentContainer}>
        <View style={styles.appointmentHeader}>
          <View style={styles.appointmentHeaderLeft}>
            <Text style={styles.appointmentDate}>Apr 08,2022</Text>
            <Text style={{ fontWeight: '700', fontSize: 20 }}>Today</Text>
          </View>
          <View style={styles.appointmentHeaderRight}>
            <Button style={styles.appointmentBtnCTA} mode='contained' onPress={() => {}}>+ Add</Button>
          </View> 
        </View>
        <HorizontalCalendar selectedDate={new Date()}/>
        <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 10}}>Schedule Today</Text>
        <TimeScheduler />
        <ScrollView style={{height: height*0.3}}>
        <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 10, marginTop: 8}}>Reminder</Text>
        <Text style={{ fontWeight: '400', fontSize: 16, marginLeft: 10, color: '#575A61'}}>Dont forget schedule for upcoming appointment</Text>

        <View style={styles.appointmentScreenCTAContainer}>
        <View style={styles.appointmentScreenCTA}>
          <View style={styles.screenCTAProfile}>
            <View style={styles.appointmentScreenCTALeft}>
              <View>
              <Text style={{ fontSize: 18, fontWeight: '600'}}>{nurse?.name}</Text>
              <Text style={{ fontSize: 16, fontWeight: '500'}}>Nurse</Text>
              <View style={{flexDirection: 'row', marginTop: 6}}>
                <IconButton icon='star' style={{ backgroundColor: '#FEF8F4', borderRadius: 15, margin: 0 }} size={30} color='#EF802F' />
                <View style={{ marginLeft: 4 }}>
                <Text style={{ fontSize: 14, marginTop: 8 }}>Rating</Text>
                <Text style={{ fontSize: 16, fontWeight: '500'}}>{nurse.ratings} out of 5</Text>
                </View>
              </View>
              </View>
            <Avatar.Image source={nurse.avatar} />
            </View>
            <View style={styles.selectedAppointment}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '50%'}}>
                <IconButton icon='calendar-multiselect'size={22} color='#1648CE' />
                <Text>Monday, Dec 23</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', width: '50%'}}>
                <IconButton icon='clock'size={22} color='#1648CE' />
                <Text>12:00-13:00</Text>
              </View>
            </View>
          
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 308, marginTop: 16}}> 
              <Button style={{backgroundColor: '#1648CE', width: 146, height: 38, alignItems: 'center', justifyContent: 'center'}} mode="contained" onPress={() => navigation.navigate('Home', {screen: 'Payment', params: nurse })}>Schedule</Button>
              <Button mode="outlined" style={{borderWidth: 2 ,borderColor: '#1648CE',width: 146, height: 38, alignItems: 'center', justifyContent: 'center'}} onPress={() => {}}>Cancel</Button>
            </View>
          </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AppointmentScreen

const styles = StyleSheet.create({
  appointmentContainer: {
    display: 'flex',
    backgroundColor: '#F1F1F1',
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 15
    
  },
  appointmentHeaderLeft: {
    flexDirection: 'column',
  },
  appointmentDate: {
    fontWeight: '400',
    fontSize: 14

  },
  appointmentBtnCTA: {
    borderRadius: 20,
  },
  appointmentScreenCTAContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    backgroundColor: 'white',
    height: 250,
    width: 343,
    marginTop: 15,
    marginLeft: 15,
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
  appointmentScreenCTA: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
  appointmentScreenCTALeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',    
    // padding: 6
  },
  selectedAppointment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5FAFF',
    padding: 16,
    borderRadius: 16,
    width: 311,
    height: 48,
    marginTop: 16
  }
})