import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import NurseItem from './NurseItem'

const {height, width} = new Dimensions.get('screen')
const NurseList = ({ navigation }) => {
    const [nurses, setNurses] = useState([
        {
            avatar: require('../assets/avt.png'),
            name: "Seun Olumide",
            location: "Gbagada",
            price: "$250",
            patientsBooked: 345,
            articles: 275,
            following: 234,
            followers: 123,
            ratings: 4.78,
            feedback: [
            {
                userImg: require('../assets/anonymous.png'),
                username: 'Anonymous feedback',
                message: 'Very competent specialist. I am very happy that there are such professional doctors. My baby is in safe hands. My childs health is above all'
            },
            {
                userImg: require('../assets/avtr1.png'),
                username: 'Erika Lhee',
                message: 'Just a wonderful doctor, very happy that she is leading our child, competent, very smart, nice.'
            },
        
            ]
        },
        {
            avatar: require('../assets/avt.png'),
            name: "Seun Olumide",
            location: "Gbagada",
            price: "$250",
            patientsBooked: 345,
            articles: 275,
            following: 234,
            followers: 123,
            ratings: 4.78,
            feedback: [
            {
                userImg: require('../assets/anonymous.png'),
                username: 'Anonymous feedback',
                message: 'Very competent specialist. I am very happy that there are such professional doctors. My baby is in safe hands. My childs health is above all'
            },
            {
                userImg: require('../assets/avtr1.png'),
                username: 'Erika Lhee',
                message: 'Just a wonderful doctor, very happy that she is leading our child, competent, very smart, nice.'
            },
        
            ]
        },
        {
            avatar: require('../assets/avt.png'),
            name: "Seun Olumide",
            location: "Gbagada",
            price: "$250",
            patientsBooked: 345,
            articles: 275,
            following: 234,
            followers: 123,
            ratings: 4.78,
            feedback: [
            {
                userImg: require('../assets/anonymous.png'),
                username: 'Anonymous feedback',
                message: 'Very competent specialist. I am very happy that there are such professional doctors. My baby is in safe hands. My childs health is above all'
            },
            {
                userImg: require('../assets/avtr1.png'),
                username: 'Erika Lhee',
                message: 'Just a wonderful doctor, very happy that she is leading our child, competent, very smart, nice.'
            },
        
            ]
        },
        {
            avatar: require('../assets/avt.png'),
            name: "Seun Olumide",
            location: "Gbagada",
            price: "$250",
            patientsBooked: 345,
            articles: 275,
            following: 234,
            followers: 123,
            ratings: 4.78,
            feedback: [
            {
                userImg: require('../assets/anonymous.png'),
                username: 'Anonymous feedback',
                message: 'Very competent specialist. I am very happy that there are such professional doctors. My baby is in safe hands. My childs health is above all'
            },
            {
                userImg: require('../assets/avtr1.png'),
                username: 'Erika Lhee',
                message: 'Just a wonderful doctor, very happy that she is leading our child, competent, very smart, nice.'
            },
        
            ]
        },
        {
            avatar: require('../assets/avt.png'),
            name: "Seun Olumide",
            location: "Gbagada",
            price: "$250",
            patientsBooked: 345,
            articles: 275,
            following: 234,
            followers: 123,
            ratings: 4.78,
            feedback: [
            {
                userImg: require('../assets/anonymous.png'),
                username: 'Anonymous feedback',
                message: 'Very competent specialist. I am very happy that there are such professional doctors. My baby is in safe hands. My childs health is above all'
            },
            {
                userImg: require('../assets/avtr1.png'),
                username: 'Erika Lhee',
                message: 'Just a wonderful doctor, very happy that she is leading our child, competent, very smart, nice.'
            },
        
            ]
        },
        {
            avatar: require('../assets/avt.png'),
            name: "Seun Olumide",
            location: "Gbagada",
            price: "$250",
            patientsBooked: 345,
            articles: 275,
            following: 234,
            followers: 123,
            ratings: 4.78,
            feedback: [
            {
                userImg: require('../assets/anonymous.png'),
                username: 'Anonymous feedback',
                message: 'Very competent specialist. I am very happy that there are such professional doctors. My baby is in safe hands. My childs health is above all'
            },
            {
                userImg: require('../assets/avtr1.png'),
                username: 'Erika Lhee',
                message: 'Just a wonderful doctor, very happy that she is leading our child, competent, very smart, nice.'
            },
        
            ]
        },
        
    ])
  return (
    <View style={styles.nurseList}>
        <Text style={styles.nurseText}>Hire a nurse</Text>
        <ScrollView style={{height: height*0.6}} >
            {nurses.map((nurse, index) => (
                <NurseItem 
                    key={index} 
                    avatar={nurse.avatar}
                    name={nurse.name} 
                    location={nurse.location}
                    price={nurse.price}
                    onPress={() => navigation.navigate('Home', 
                        {
                            screen: 'NurseProfile',
                            params: nurse
                        }
                    )}
                />
            ))}
        </ScrollView> 
    </View>
  )
}   

export default NurseList

const styles = StyleSheet.create({
    nurseList: {
        alignSelf: 'flex-start',
        width,
        paddingHorizontal: 10
    },

    nurseText: {
        color: 'gray',
        fontWeight: '700',
        fontSize: 19,
        marginTop: 10,
        marginLeft: 15,
        letterSpacing: 0.7
    }
    
})