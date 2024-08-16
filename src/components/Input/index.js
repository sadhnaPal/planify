import React from 'react';
import { TextInput, View, Image, Pressable } from 'react-native';
import styles from './styles';
import colors from '../../constant/colors';

const InputField = ({outlined,placeholder = 'Email', style, ...props}) =>{
   return ( 
  
        <TextInput style={[styles.Input, outlined ? styles.outlined : {}]} {...props} placeholderTextColor={colors.hintColor} placeholder={placeholder}/>

    )
}

// SearchInput.defaultProps = {
//     placeholder: 'Search',
//     showSearchIcon: true,
// }

export default React.memo(InputField)