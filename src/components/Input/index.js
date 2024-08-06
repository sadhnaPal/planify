import React from 'react';
import { TextInput, View, Image, Pressable } from 'react-native';
import styles from './styles';
import colors from '../colors';

const InputField = ({placeholder = 'Email', pressable, onPress, style}) =>{
   return ( 
    <View style={[styles.container, style]}>
        <TextInput style={styles.Input} placeholderTextColor={colors.hintColor} placeholder={placeholder}/>
    </View>
    )
}

// SearchInput.defaultProps = {
//     placeholder: 'Search',
//     showSearchIcon: true,
// }

export default React.memo(InputField)