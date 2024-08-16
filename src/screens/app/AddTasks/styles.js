import { StyleSheet } from "react-native";
import colors from "../../../constant/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backContainer: {
     padding: 10
    },
    backIcon:{
        width: 35,
        height: 35,
    },
    lable:{
        color:colors.purple, 
        fontSize: 15, 
        fontWeight: '300', 
        marginHorizontal: 18,
       marginVertical: 10
    },
    button:{
        margin: 24,
    }

})

export default styles