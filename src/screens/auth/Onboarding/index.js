import React from "react"
import { Image, Text, View } from "react-native"
import styles from "./styles"
import Button from "../../../components/Button"


const Onbboarding = ({navigation}) => {
    return(
        <View style={styles.container}>
          <View style={{flex: 1}}>
          <Image style={styles.image} source={require('../../../assests/onboarding.png')} />
          <View style={styles.bottomContainer} />
          </View>

            <View style={styles.bottomInnerContainner}>
             <Text style={styles.text}>Best task managemennt app </Text> 
             <Text style={styles.subTitle}>Get organized by sorting out all your tasks and boost by your productivity.</Text> 
            <Button onPress={() => navigation.navigate('Login', {navigation})}>Log in</Button>
            <Button type={'blue'}>Get started</Button>
            </View>
      
        </View>
    )
}

export default React.memo(Onbboarding)