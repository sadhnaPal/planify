import React from 'react'
import { View ,Text} from 'react-native'
import colors from '../../../constant/colors'
import Header from '../../../components/Header/Index'

const Task = () => {
    return(
        <View>
            <Header title="Task" />
            <Text style={{color:'black'}}>Task</Text>
        </View>
    )
}

export default React.memo(Task)