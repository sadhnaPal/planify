import { StyleSheet } from "react-native";
import colors from "../../constant/colors";


const styles = StyleSheet.create({
     container:{
     width:'100%',
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     padding: 24,
     
     },
     title:{
      fontSize: 16,
      fontWeight: '800',
      color: colors.purple,
     },
     icon:{
      width: 24,
      height: 24
     }

})

export default styles