import { StyleSheet } from "react-native";
import colors from "../../constant/colors";


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.lightGrey,
        marginTop:30,
    },
    Input:{
       color: colors.black,
       fontSize: 14,
       fontWeight:'500',
       flex: 1,
       paddingStart:20,
    },
})

export default styles;