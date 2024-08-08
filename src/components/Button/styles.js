import { StyleSheet, Text } from "react-native";
import colors from "../../constant/colors";

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.purple,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    text:{
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    blueBg:{
        backgroundColor: colors.blue,
    }
    
})

export default styles;