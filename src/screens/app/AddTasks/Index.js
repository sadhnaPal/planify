import React from 'react'
import { View ,Text} from 'react-native'

const AddTasks = () => {
    return(
        <View>
            <Text style={{colors:'yellow'}}>Add Task</Text>
        </View>
    )
}

export default React.memo(AddTasks)