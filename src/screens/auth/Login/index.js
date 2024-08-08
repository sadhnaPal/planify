import React, { useState } from 'react'
import { Alert, ScrollView, Text, TextInput, View } from 'react-native'
import styles from './styles'
import InputField from '../../../components/Input'
import Button from '../../../components/Button'
import auth from '@react-native-firebase/auth';


const Login = ({navigation}) =>{
    const [values, setValues] = useState({})

    const onChange = (value, key) =>{
        setValues(vals => ({
         ...vals,
         [key]: value
        }))
    }
    const onSubmit = () =>{
        if(!values.email){
            Alert.alert("Please enter email address")
            return
        }
        if(!values.password){
            Alert.alert("Please enter password")
            return
        }
        auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
          console.log('User signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          } else if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }else{
            Alert.alert(error.message)
          }
        });
    }
return(
<View style={styles.containner}>
        <Text style={styles.title}>Welcome back!</Text>
        <InputField placeholder='Email' keyboardType='email-address' onChangeText = {val => {onChange(val, 'email')}} />
        <InputField placeholder='Password' onChangeText = {val => {onChange(val, 'password')}}  secureTextEntry />
        <Button onPress={onSubmit} style={styles.button} children={'Log in'} />
        <View   style={[styles.singupConatiner, {alignContent:'center',alignItems:'center'}]}>
            <Text style={styles.txtSignup}>Not registered?</Text>
            <Text style={styles.signup} onPress={() => navigation.navigate('Signup')}>Sign up!</Text>
        </View>
    </View>
)
}

export default React.memo(Login)