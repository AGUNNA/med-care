import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Menu, Divider } from 'react-native-paper';

const {height, width} = new Dimensions.get('screen')

const PaymentScreen = ({route, navigation}) => {
    const nurse = route.params

    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const [paymenttype, setPaymenttype] = useState('PAYMENT TYPE')


    return (
        <SafeAreaView>
            <View style={styles.paymentScreenContainer}>
                <Text style={styles.paymentHeaders}>Payment Method</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 322,
                        height: 50,
                        backgroundColor: '#E9E9E9',
                        borderWidth: 2,
                        borderRadius: 6,
                        shadowColor: "#000",
                        shadowOffset: {
                        width: 0,
                        height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4.84,
                        elevation: 5,
                    }}>
                    <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    style={{width: 300, margin: 0, marginHorizontal: 90}}
                    anchor={<Button icon='credit-card' color='#3E3E50' onPress={openMenu}
                    >{paymenttype}</Button>}>
                        <View style={{width: width*0.7}}>
                    <Menu.Item 
                        onPress={() => {
                            setPaymenttype('Paystack')
                            closeMenu()
                        }} 
                        title="Paystack" />
                        </View>
                    </Menu>
                </View>
                <View style={styles.editOrderRow}>
                    <Text style={styles.paymentHeaders}>Order</Text>
                    <Button icon='pencil'  style={{margin: 0 }} size={30} color='#1648CE'>Edit</Button>
                </View>
                <View style={styles.paymentDescription}>
                    <Text style={styles.paymentHeaders}>Order</Text>
                    <Text style={styles.paymentHeaders}>Quantity</Text>
                </View>
                <View style={{borderBottomWidth: 2, borderColor: '#E0E0E0', width: '100%', alignSelf: 'flex-start', marginTop: 8}} />
                <View style={styles.paymentDescription}>
                    <View style={styles.paymentDescriptionLeft}>
                        <Text style={styles.paymentHeaders}>{nurse?.name}</Text>
                        <Text style={styles.paymentHeaders}>{nurse?.price}</Text>
                    </View>
                        <Text style={styles.paymentHeaders}>1</Text>
                </View>
                <View style={{borderBottomWidth: 2, borderColor: '#E0E0E0', width: '100%', alignSelf: 'flex-start', marginTop: 8}} />
                <View style={styles.paymentTotal}>
                    <Text style={styles.paymentHeaders}>Total</Text>
                    <Text style={styles.paymentHeaders}>{nurse?.price}</Text>
                </View>
                <Button mode="outlined" style={{borderStyle: 'dashed',borderWidth: 2 ,borderColor: '#3E3E50',width: 326, height: 38, alignItems: 'center', justifyContent: 'center', marginTop: 20}} color= '#3E3E50' onPress={() => {}}>Discount Code</Button>

                <Button mode="contained" style={{borderWidth: 2 ,borderColor: '#1648CE',width: 326, height: 38, alignItems: 'center', justifyContent: 'center', marginTop: 60}} onPress={() => navigation.navigate('Home', { screen: 'Paystack'})}>PAY</Button>
            </View>
        </SafeAreaView>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    paymentHeaders: {
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'normal',
        color: '#3E3E50'
    },
    paymentScreenContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#F1F1F1',
        paddingHorizontal: 25,
        height: 480

    },
    editOrderRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    paymentDescription: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    paymentTotal: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    }
})