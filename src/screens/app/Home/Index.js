import React from 'react'
import { View,Text } from 'react-native'
import  Header from '../../../components/Header/Index'

const Home = () => {
    return(
        <View style={{width:'100%'}}>
            <Header title = "Home" />
            <Text style={{colors:'yellow'}}>Home</Text>
        </View>
    )
}

export default React.memo(Home)