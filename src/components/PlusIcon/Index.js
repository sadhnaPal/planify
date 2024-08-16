import React from 'react'
import { Pressable, Text } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const PlusIcon = () =>{
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate('AddTask')
    }
    return(
            <Pressable style={styles.container} onPress={onPress} hitSlop={8}>
            <Text style={styles.plus}> + </Text>
            </Pressable>

    )
}

export default React.memo(PlusIcon)