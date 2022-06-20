import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, ActivityIndicator, } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import { auth, facebookprovider, googleprovider } from '../firebase'

const {height, width} = new Dimensions.get('screen')
const LoginScreen = ({route, navigation}) => {

  const [register, setRegister] = useState(false)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const login = () => {
    setLoading(true)
    if(email && password) auth.signInWithEmailAndPassword(email, password).then(() => alert('success')).catch((e) => alert(e))
    setLoading(false)
  }
  const signup = () => {
    setLoading(true)
    if(email && password) auth.createUserWithEmailAndPassword(email, password).then().catch((e) => alert(e))
    setLoading(false)
  }

  const googlesignin = () => {
    auth.signInWithPopup(googleprovider)
  }

  const facebooksignin = () => {
    auth.signInWithPopup(facebookprovider)
  } 

  return (
    <SafeAreaView cont>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{height: 800,}}>
            <View style={{height: 250, backgroundColor: '#1648CE', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
              <Image source={require('../assets/loxlogo.png')} style={{height: 45, width: 45}}/>
              <View style={{flexDirection: 'column', marginHorizontal: 5}}>
                <Text style={{fontWeight: '700', fontSize: 26, color: '#D2D4FA'}}>Med-Care</Text>
                <Text style={{fontWeight: '500', fontSize: 16, color: 'black'}}>Powered by Gentle Giant</Text>
              </View>
            </View>
          <View style={{padding: 15, display: 'flex', }}>
            <Text style={{fontWeight: '700', fontSize: 26, color: 'black', alignSelf: 'center'}}>
              {register ? 'Sign Up' : 'Login'}</Text>
              <ScrollView style={{height: height*0.2}} showsVerticalScrollIndicator={false}>
            <TextInput
              label="Email"
              placeholder='Input email here'
              mode='flat'
              value={email}
              onChangeText={text => setEmail(text)}
              style={{width: width*0.91, backgroundColor: 'transparent'}}
              activeUnderlineColor='black'
              underlineColor='grey'
            />
            <View style={{display: 'flex', flexDirection: 'row', borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 50}}>
              <TextInput
                label="Password"
                placeholder='Input password here'
                mode='flat'
                value={password}
                onChangeText={text => setPassword(text)}
                style={{width: width * 0.75, backgroundColor: 'transparent'}}
                underlineColor='transparent'
                activeUnderlineColor='transparent'
                textContentType='password'
              />
              <Text style={{fontWeight: '500', fontSize: 14, color: 'black',alignSelf: 'flex-end', marginVertical: 8}}>Forgot?</Text>
            </View>
              </ScrollView>
            <Button mode="contained" style={{width: 298, height: 40, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', backgroundColor: 'black', marginTop: 25}} onPress={register ? signup : login}>
              {loading? <ActivityIndicator /> : register ? 'Sign Up' : 'Login'}
            </Button>

            <Text style={{fontSize: 16, color: '#64748B', alignSelf: 'center', marginVertical: 10}}>Or continue with</Text>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 300, alignSelf: 'center'}}>
              <Button mode="contained" icon={'google'} style={{width: 140, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 6}} onPress={googlesignin}>Google</Button>
              <Button mode="contained" icon={'facebook'} style={{width: 140, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 6}} onPress={facebooksignin}>Facebook</Button>
            </View>
            <Text style={{fontSize: 16, color: '#64748B', alignSelf: 'center', marginTop: 10}}>Don’t have account?<Text style={{fontSize: 18, color: 'black', fontWeight: '600', width, height}} onPress={() => setRegister(!register)}> {register ? 'Log In' : 'Create now'}</Text></Text>
          </View>
          </View>  
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})