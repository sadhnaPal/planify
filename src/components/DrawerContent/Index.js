import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
import { Linking, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import colors from '../../constant/colors';
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../constant/links';
  
  function DrawerContent(props) {
    const {navigation} = props;
    const logOut = () =>{
      auth()
      .signOut()
       .then(() => console.log('User signed out!'));
    }
    return (
      <DrawerContentScrollView {...props}>
        <Text style={styles.link} onPress={() => navigation.navigate('Home')}>Home</Text>
        <Text style={styles.link} onPress={() => navigation.navigate('Tasks')}>Tasks</Text>
        <Text style={styles.link} onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}>Privacy Policy</Text>
        <Text style={styles.link} onPress={() => Linking.openURL(TERMS_CONDITIONS_LINK)}>Terms & Conditions</Text>
        <Text style={styles.link} onPress={logOut}>Log out</Text>
      
      </DrawerContentScrollView>
    );

  }

  const styles = StyleSheet.create({
    link:{
        color: colors.black,
        fontWeight: '900',
        fontSize: 13,
        margin: 8,
        paddingHorizontal: 15
    }
  })

  export default React.memo(DrawerContent)