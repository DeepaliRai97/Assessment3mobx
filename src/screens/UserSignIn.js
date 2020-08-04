import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { UserSchema ,addUser} from '../../database/UserSchema';
const Realm = require('realm');
const UserSignIn = ({ navigation }) => {
    const [useremail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const validation = () => {
      if (useremail == '' || userpassword == '')
          alert('Please enter all values');
          else if(useremail==''){alert('please enter valid username')}
          else if (userpassword==''){alert('please enter valid email')}
        else {
                const userData={
                    email_id:useremail,
                    userpassword:userpassword,

                }
                addUser(userData)
                alert('Account created successfully')
                navigation.navigate('UserDashBoard')
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
                    <TextInput
                        placeholder="Email"
                        onChangeText={useremail => setUserEmail(useremail)}
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        onChangeText={userpassword => setUserPassword(userpassword)}
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        secureTextEntry
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={validation}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('UserSignUp')}>
                        <Text style={styles.buttn}>Have u an account? Create one</Text>
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
        paddingVertical: 10,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 20
    }
});

export default UserSignIn;