import { StyleSheet } from "react-native";

const style=StyleSheet.create({
    container:{
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'center'
    },
    categoryBlock:{
        height:180,
        width:180,
        flexDirection:'column',
        alignItems:'center'
    },
    categoryImage:{
        margin:22,
        height:100,
        width:100,
        borderRadius:5,
    }
});

export default style;