import React, { useState } from 'react'
import { View ,Text} from 'react-native'
import Button from '../../../components/Button'
import styles from './styles'
import InputField from '../../../components/Input/index'
import colors from '../../../components/colors'
import CheckBox from 'react-native-check-box'

const Signup = ({navigation}) => {
  const [isChecked, setChecked] = useState(false)

 return(
    <View style={styles.containner}>
        <Text style={styles.title}>Join the hub!</Text>
        <InputField placeholder='First Name' />
        <InputField placeholder='Last Name' />
        <InputField placeholder='Email' />
        <InputField placeholder='Password' />
        <InputField placeholder='Confirm Password' />
        <View style={{width:'100%', flexDirection: 'row'}}>  
         <CheckBox 
          style = {{margin: 10}}
          isChecked={isChecked}
          rightTextStyle = {styles.rightText}
          checkBoxColor = {colors.purple}
          onClick = {()=>{
            setChecked(!isChecked)
          }}
         />
         <Text style={{width:'100%' ,fontSize: 12, color: colors.black,flexDirection: 'row', marginTop: 15,}}>I agree to 
            <Text style={styles.link}> Terms and Conditions </Text> and  <Text style={styles.link}> Privacy Policy</Text>
            </Text>
        </View>

        <Button style={styles.button} children={'Create account'} type={'blue'} />
        <View style={[styles.singupConatiner, {alignContent:'center',alignItems:'center'}]}>
            <Text style={styles.txtSignup}>Already registered? </Text>
            <Text style={styles.signup} onPress={() => navigation.navigate('Login')}>Sign in!</Text>
        </View>
    </View>
 )
}

export default React.memo(Signup)