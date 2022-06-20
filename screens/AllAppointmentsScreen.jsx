import { StyleSheet, Text, SafeAreaView,View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import { Button, IconButton } from 'react-native-paper'
import HorizontalCalendar from '../components/HorizontalCalender'


const {height, width} = new Dimensions.get('screen')

const AllAppointmentsScreen = ({}) => {

    const allappointments = [
        {
            name: 'Seun Olumide',
            time: '9:00am',
            completed: true
        },
        {
            name: 'Seun Olumide',
            time: '9:00am',
            completed: true
        },
        {
            name: 'Seun Olumide',
            time: '9:00am',
            completed: true
        },
        {
            name: 'Seun Olumide',
            time: '9:00am',
            completed: false
        }
    ]


    return (

        <SafeAreaView style={styles.appointmentContainer}>
            <View style={styles.appointmentHeader}>
                <View style={styles.appointmentHeaderLeft}>
                    <Text style={styles.appointmentDate}>Apr 08,2022</Text>
                    <Text style={{ fontWeight: '700', fontSize: 20 }}>Today</Text>
                </View>
                <View style={styles.appointmentHeaderRight}>
                    <Button style={{borderRadius: 20,}} mode='contained' onPress={() => {}}>+ Add</Button>
                </View> 
            </View>
            <HorizontalCalendar selectedDate={new Date()}/>
            <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'space-between'}} style={{height: height*0.6}}>
                {allappointments.map((appointment, index) => (
                    <AppointmentRow 
                        nurse_name={appointment.name}
                        appointment_time={appointment.time}
                        completed={appointment.completed}
                        key={index}
                    />
                ))}
                <View style={{marginTop: 15}}> 
                <Button mode="outlined" style={{borderStyle: 'dashed',borderWidth: 2 ,borderColor: '#3E3E50',width: 326, height: 38, alignItems: 'center', justifyContent: 'center'}} color= '#3E3E50'>Add Appointment</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const AppointmentRow = ({completed, nurse_name, appointment_time}) => (
    <TouchableOpacity style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 300}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <IconButton icon={'checkbox-intermediate'} color='#0C9359' />
            {completed && (<View style={{height: 50, width: 2, backgroundColor: 'green'}}/>)}
        </View>
        <View style={{flexDirection: 'column'}}>
            <Text style={{ fontWeight: '500', fontSize: 18}}>{nurse_name}</Text>
            <Text style={{ fontWeight: '400', fontSize: 15, opacity: 0.5}}>{appointment_time}</Text>
        </View>
        {completed? <IconButton icon={'checkbox-marked'} size={28}/> : <IconButton icon={'checkbox-blank'} size={28}/>}
    </TouchableOpacity>
)

export default AllAppointmentsScreen

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