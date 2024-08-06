import React from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import styles from './styles'
import InputField from '../../../components/Input'
import Button from '../../../components/Button'


const Login = ({navigation}) =>{
return(
<View style={styles.containner}>
        <Text style={styles.title}>Welcome back!</Text>
        <InputField placeholder='Email' />
        <InputField placeholder='Password' />
        <Button style={styles.button} children={'Log in'} />
        <View style={[styles.singupConatiner, {alignContent:'center',alignItems:'center'}]}>
            <Text style={styles.txtSignup}>Not registered?</Text>
            <Text style={styles.signup} onPress={() => navigation.navigate('Signup')}>Sign up!</Text>
        </View>
    </View>
)
}

export default React.memo(Login)