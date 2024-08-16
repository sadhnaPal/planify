import React from 'react'
import { View ,Text, ScrollView} from 'react-native'
import colors from '../../../constant/colors'
import Header from '../../../components/Header/Index'
import PlusIcon from '../../../components/PlusIcon/Index'
import Title from '../../../components/Title/Index'

const Task = () => {
    return(
        <View style={{flex:1}}>
            <Header title="Task" />
            <ScrollView>
            <Title type="thin">To Do Tasks</Title>
            </ScrollView>
            <PlusIcon />
           
        </View>
    )
}

export default React.memo(Task)