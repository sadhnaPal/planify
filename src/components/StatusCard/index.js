import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text } from 'react-native'
import getStyles from './styles'

const StatusCard = ({label, count, type}) => {
    const navigatin = useNavigation()
    const styles = getStyles(type)
    const onPress = () => {
        navigatin.navigate('Tasks')
    }
    return(
      <Pressable style={styles.container} onPress={onPress} hitSlop={8}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.count}>{count}</Text>
    </Pressable>
    )
}

export default React.memo(StatusCard)