import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import { Image, Text } from 'react-native'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'

const DateInput = ({value, onChange , ...props}) => {

    const [open, setOpen] = useState(false)
  

    const onDateOpen = () =>{
     setOpen(true)
    }

    return(
        <>
        <TouchableOpacity onPress={onDateOpen} style={styles.outlined}>
            <Image style={styles.icon} source={require('../../assests/calendar_icon.png')} />
            <Text style={styles.text}>{moment(value).format('L')  || 'Select date...'}</Text>

        </TouchableOpacity>
        <DatePicker
        modal
        mode='date'
        open={open}
        date={value}
        onConfirm={(date) => {
          setOpen(false)
          onChange(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
        </>
        
    )
}
export default React.memo(DateInput)