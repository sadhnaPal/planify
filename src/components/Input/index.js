import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
import colors from '../../constant/colors';

const Input = ({outlined, ...props}) => {
  return (
    <TextInput
      placeholderTextColor={colors.midGrey}
      style={[styles.input, outlined ? styles.outlined : {}]}
      {...props}
    />
  );
};

export default React.memo(Input);