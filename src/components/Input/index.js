import React from 'react';
import { TextInput, View, Image, Pressable } from 'react-native';
import styles from './styles';
import colors from '../../constant/colors';

const InputField = ({placeholder = 'Email', style, ...props}) =>{
   return ( 
    <View style={[styles.container, style]}>
        <TextInput style={styles.Input} {...props} placeholderTextColor={colors.hintColor} placeholder={placeholder}/>
    </View>
    )
}

// SearchInput.defaultProps = {
//     placeholder: 'Search',
//     showSearchIcon: true,
// }

export default React.memo(InputField)