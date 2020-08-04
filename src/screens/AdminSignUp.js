import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { addUser } from '../../database/AdminSchema';

const Realm = require('realm');

const AdminSignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validation = () => {
        if (name == '' || email == '' || password == '')
            alert('Please enter all values');
            else if (name == '') { alert('please enter valid username') }
            else if (email == '') { alert('please enter valid email') }
        else {
            const userData = {
                username: name,
                email_id: email,
                userpassword: password,
                 }
            addUser(userData)
            alert('Account created successfully')
            navigation.navigate('AdminDashBoard')
        }
    }
    return (
            <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')} />
                <Text style={styles.title}>Welcome !</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.textinput}>
                    <TextInput placeholder='Name' style={styles.input}
                        placeholderTextColor="rgba(255,255,255,0.7)"

                        onChangeText={name => setName(name)} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        style={styles.input}
                        onChangeText={email => setEmail(email)} />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        secureTextEntry
                        style={styles.input}
                        onChangeText={password => setPassword(password)}/>
                    <TouchableOpacity 
                        style={styles.buttonContainer} 
                        onPress={validation}>
                        <Text style={styles.buttonText}>Create Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('AdminSignIn')} >
                        <Text style={styles.buttn}>Already Have an Account,Go Back!</Text>
                    </TouchableOpacity>
                 </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 180,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 28,
    },
    textinput: {
        padding: 20,
        paddingBottom: 150,
        paddingVertical: 10
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 20,
    },
    buttonContainer: {
        backgroundColor: '#2908b9',
        paddingVertical: 15,
        marginBottom: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    buttn: {
        color: '#2908b9',
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 20
    },
});

export default AdminSignUp;