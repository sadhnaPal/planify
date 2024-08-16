import {StyleSheet} from 'react-native';
import colors from '../../constant/colors';

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 24,
  },
  thin: {
    fontWeight: '300',
    color: colors.purple,
    marginHorizontal: 10,
    
  }
});

export default styles;