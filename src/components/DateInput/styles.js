import { StyleSheet } from "react-native";
import colors from "../../constant/colors";


const styles = StyleSheet.create({
    Input:{
        
        fontWeight:'500',
        paddingStart:20,
    },
    outlined:{
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.black,
        marginHorizontal: 20,
        marginVertical: 12,
        paddingHorizontal: 14,
        paddingVertical: 13,
        alignItems:'center'
    },
    text:{
        color: colors.black,
        fontSize: 14,
        marginStart: 10,
        textAlign:'center'
    },
    icon:{
        width: 24,
        height: 24
    }
})

export default styles;