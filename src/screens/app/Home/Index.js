import React from 'react'
import { View,Text } from 'react-native'
import  Header from '../../../components/Header/Index'
import PlusIcon from '../../../components/PlusIcon/Index'
import { ScrollView } from 'react-native-gesture-handler'
import Title from '../../../components/Title/Index'

const Home = () => {
    return(
        <View style={{width:'100%',flex: 1}}>
            <Header title = "Home" />
            <ScrollView>
             <Title type="thin">Daily Tasks:</Title>
            </ScrollView>
            
            <PlusIcon />
        </View>
    )
}

export default React.memo(Home)