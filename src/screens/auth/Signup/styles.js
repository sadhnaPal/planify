import { StyleSheet } from "react-native";
import colors from "../../../constant/colors";

const styles = StyleSheet.create({
    containner: {
     width: '100%',
     height: '100%',
     backgroundColor: colors.white,
     padding: 20,
    },
    title:{
        fontSize: 25,
        color: colors.darkBlue,
        fontWeight: '900',
        marginTop: 20,

    },
    inputField:{
     width:'100%',
     backgroundColor: colors.grey,
     borderRadius:20,
    },
    button: {
        marginTop: 40,
    },
    singupConatiner:{
        width:'100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    signup:{
        color: colors.purple,
        fontSize: 16,
        fontWeight: '900',
        textAlign: 'center'
    },
    txtSignup:{
        color: colors.black,
        fontSize: 14,
        fontSize: 14,
    },
    rightText:{
        color: colors.black,
        fontSize: 12,
    },
    link:{
        textDecorationLine:'underline'
    },
    text:{
    width:'100%', 
    fontSize: 12,
    color: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap', // Ensure text wraps to next line
    marginTop:10,
  paddingEnd:20
    }

})

export default styles