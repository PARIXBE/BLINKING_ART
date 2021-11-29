import { Dimensions, StyleSheet } from "react-native";
const {width,height} =Dimensions;
const style=StyleSheet.create({
    container:{
        width:width,
        height:350,
        borderBottomEndRadius:5,
        borderBottomStartRadius:5
    },
    imageView:{
        width:width,
        height:350,
    }
})
export default style;