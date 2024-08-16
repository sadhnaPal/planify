import {StyleSheet, Dimensions} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../constant/colors';
const {height} = Dimensions.get('window');

const CategoryStyle = StyleSheet.create({
  item: {
    marginRight: 2,
    paddingVertical: 2,
    color: colors.blue,
    fontWeight:'bold',
    fontSize: 14,
    padding: 15,
    paddingTop:7,
    paddingBottom:7,
    textTransform: 'capitalize',
   
  },

  selectedItem: {color: colors.blue},

  itemConatiner: {
    marginRight: 17,
    marginVertical: 14,
    borderWidth:1,
    borderRadius: 8,
    borderColor: colors.blue
  },

  selectedItemContainer: {
    backgroundColor: colors.lightGrey,
    borderColor:  colors.lightGrey
  },
});

export default CategoryStyle;
