import { StyleSheet } from "react-native";
import colors from "../../constant/colors";


const styles = StyleSheet.create({
    Input:{
       color: colors.black,
       fontSize: 14,
       flexDirection: 'row',
       fontWeight:'500',
       borderRadius: 10,
       paddingStart:20,
    },
    outlined:{
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.black,
        marginHorizontal: 20,
    }
})

export default styles;