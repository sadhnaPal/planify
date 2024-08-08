import { Dimensions, Image, StyleSheet } from "react-native";
import colors from "../../../constant/colors";

const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
       flex: 1,
    },
    image: {
        width: '100%',
        flex: 1,
    },
    text:{
        color:'black',
        fontSize: 20,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },
    subTitle:{
     color: colors.black,
     fontSize: 12,
     marginTop: 10,
     marginBottom: 20,
     width: '100%',
    textAlign: 'center'
    },
    bottomContainer:{
        position: 'absolute',
        bottom: 0,
        height: 40,
        width: '100%',
        backgroundColor: colors.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    bottomInnerContainner:{
        padding: 46,
        paddingTop: 0,
        backgroundColor: colors.white,
    
    }

    
})

export default styles