import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { auth } from './firebase';
import AuthNavigator from './navigation/AuthNavigator';
import FooterNavigator from './navigation/FooterNavigator';

export default function App() {
  // setting up the sign in function
  const [signedIn, setSignedIn] = useState(false)

  // use effect hook to set states btw authentication phases
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setSignedIn(true)
      }else {
        setSignedIn(false)
      }
    })
  }, [])

  return (
    <Provider>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="dark" />
           {/* this if/else statement detects change with the user to start the app access point  */}
          {!signedIn ? (
            <AuthNavigator />
          ) : (
            <FooterNavigator />
          )}
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
