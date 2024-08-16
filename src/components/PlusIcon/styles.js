import { StyleSheet } from "react-native";
import colors from "../../constant/colors";

const styles = StyleSheet.create({
    container:{
     flexDirection:'row',
     justifyContent: 'center',
     alignItems:'center',
     width:60,
     height: 60,
     borderRadius: 100,
     backgroundColor: colors.blue,
     position: 'absolute',
     bottom: 24,
     right: 24,
    },
    plus:{
     fontSize: 32,
     color: colors.white,
     fontWeight: '600'
    }

})

export default styles;