import React, { useState } from 'react'
import { View ,Text, Linking, Alert, ScrollView} from 'react-native'
import Button from '../../../components/Button'
import styles from './styles'
import InputField from '../../../components/Input/index'
import colors from '../../../constant/colors'
import CheckBox from 'react-native-check-box'
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../../constant/links'
import auth from '@react-native-firebase/auth';

const Signup = ({navigation}) => {
  const [isChecked, setChecked] = useState(false)
  const [values, setValues] = useState({})

  const onLinkPress = (url) => {
    Linking.openURL(url)
  }

  const onChange = (value, key) => {
    setValues(vals => ({
      ...vals,
      [key]: value
    }))
  }  

  const onSubmit = () => {
    if(!values.first_name){
      Alert.alert("Please enter first name")
      return;
    }
    if(!values.last_name){
      Alert.alert("Please enter last name")
      return
    }
    if(values.password !== values.confirm_password){
      Alert.alert('password do not match')
      return;
    }
    if(!isChecked){
      Alert.alert('Accept Terms and conditions')
      return;
    }
    auth()
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(() => {
      auth().currentUser.updateProfile({displayName: `${values.first_name} ${values.last_name}`,});
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      }
  
      console.error(error);
    });
    }

 return(
    <View style={styles.containner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Join the hub!</Text>
        <InputField  onChangeText={val => onChange(val,'first_name')} placeholder='First Name' />
        <InputField  onChangeText={val => onChange(val,'last_name')} placeholder='Last Name' />
        <InputField  onChangeText={val => onChange(val,'email')} placeholder='Email' keyboardType='email-address' />
        <InputField  onChangeText={val => onChange(val,'password')} placeholder='Password' secureTextEntry />
        <InputField  onChangeText={val => onChange(val,'confirm_password')} placeholder='Confirm Password' secureTextEntry />
        <View style={{flexDirection: 'row', paddingEnd: 20}}>  
         <CheckBox 
          style = {{margin: 10}}
          isChecked={isChecked}
          rightTextStyle = {styles.rightText}
          checkBoxColor = {colors.purple}
          onClick = {()=>{
            setChecked(!isChecked)
          }}
         />
         <Text style={styles.text}>
          I agree to 
             <Text style={styles.link} onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}> 
              Terms and Conditions </Text>
               and  <Text style={styles.link} onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
               Privacy Policy</Text>
            </Text>
        </View>

        <Button style={styles.button} onPress={onSubmit} children={'Create account'} type={'blue'} />
        <View style={[styles.singupConatiner, {alignContent:'center',alignItems:'center'}]}>
            <Text style={styles.txtSignup}>Already registered? </Text>
            <Text style={styles.signup} onPress={() => navigation.navigate('Login')}>Sign in!</Text>
        </View>
        </ScrollView>
    </View>
 )
}

export default React.memo(Signup)