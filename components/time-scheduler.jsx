import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, IconButton } from 'react-native-paper'

const TimeScheduler = () => {
  const schedule = [
    {
      time: '9:00',
      appointment: null
    },
    {
      time: '10:00',
      appointment: {
        id: 44,
        appointmentType: 'Cardiologist',
        doctorName: 'Dan Johnson',
        doctorImg: require('../assets/docpic.png'),
        continue: false
      }
    },
    {
      time: '11:00',
      appointment: {
        id: 44,
        appointmentType: 'Cardiologist',
        doctorName: 'Dan Johnson',
        doctorImg: require('../assets/avt.png'),
        continue: true
      }
    },
  ]

  const isBooked = (s) => {
    if(s.appointment !== null) return true

    return false
  }

  const isContinuation = (s) => {
    if(s.appointment?.continue === true) return true

    return false
  }
  return (
    <ScrollView style={styles.timeScheduler}>
      {schedule.map((s, index) => (
        <TimeRow
          key={index}
          time={s.time} 
          booked={isBooked(s)}
          continuation={isContinuation(s)}
          appointmentType={isBooked(s) ? s.appointment.appointmentType : ''} 
          doctorName={isBooked(s) ? s.appointment.doctorName : ''}
          doctorImg={isBooked(s) ? s.appointment.doctorImg : ''} 
        />
      ))}
    </ScrollView>
  )
}

export default TimeScheduler

const TimeRow = ({time, booked, appointmentType, doctorName, doctorImg, continuation}) => (
  <View style={styles.timerow}>
    <Text>{time}</Text>
    {booked? continuation? <Text></Text> : (
      <Appointment appointmentType={appointmentType} doctorName={doctorName} doctorImg={doctorImg} />
    ) : (
      <NoAppointment />
    )}
  </View>
)

const Appointment = ({appointmentType, doctorName, doctorImg}) => (
  <View style={styles.appointment}>
    <View style={{flexDirection: 'column'}}>
      <Text style={{ fontSize: 16, fontWeight: '600',}}>{appointmentType}</Text>
      <Text>{doctorName}</Text>
    </View>
    <Avatar.Image source={doctorImg} size={28} />
  </View>
)

const NoAppointment = () => (
  <View style={styles.noAppointment}>
    <IconButton icon='brightness-1' size={12} style={{margin: 0}} />
    <View style={{borderBottomWidth: 2, borderColor: 'blue', width: '100%', alignSelf: 'flex-start', marginTop: 8}} />
  </View>
)

const styles = StyleSheet.create({
  noAppointment: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  appointment: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#FAE9E9',
    borderRadius: 15,
    width: '85%',
    padding: 20
  },
  timerow: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  timeScheduler: {
    height: 155,
    padding: 15
  }
})