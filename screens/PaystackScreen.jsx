import React, { useRef } from 'react';
import  { Paystack , paystackProps}  from 'react-native-paystack-webview';
import { View, TouchableOpacity, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PaystackScreen({navigation}){
    // const paystackWebViewRef = useRef<paystackProps.PayStackRef>(''); 

    return (
        <View style={{flex: 1}}>
            <Paystack
                paystackKey="pk_test_04e2508f43984743f1cc553f56f6e5c6d2d4d86c"
                billingEmail="agunnabueze@gmail.com"
                amount={'25000.00'}
                onCancel={(e) => {
                    // navigation.navigate('Home', {screen: 'Payment'})
                // handle response here
                }}
                onSuccess={(res) => {
                    if(res.status === 'success') {
                        navigation.navigate('Home', {screen: 'Approved'})
                    }
                // handle response here
                }}
                autoStart={true}
            />
            {/* <SafeAreaView>
                
            </SafeAreaView> */}
            

            {/* <TouchableOpacity onPress={()=> paystackWebViewRef.current.startTransaction()}>
                <Text>Pay Now</Text>
            </TouchableOpacity> */}
        </View>
    );
}