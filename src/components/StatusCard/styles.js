import { StyleSheet } from "react-native";
import colors from "../../constant/colors";

const getStyles = (type) => StyleSheet.create({
    container:{
     backgroundColor: type === 'error' ? colors.lightRed: colors.lightGrey,
     borderRadius: 15,
     padding:12,
     marginRight: 8,
     width:"30%"
    },
    label:{
     marginBottom: 32,
     fontSize: 10,
     color: type === 'error' ? colors.red: colors.blue
    },
    count:{
        fontSize: 28,
        fontWeight: '800',
        color:type === 'error' ? colors.red: colors.blue,
        marginBottom: 10,
    }

})

export default getStyles;