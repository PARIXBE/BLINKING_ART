import { StyleSheet,Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const style=StyleSheet.create({
    container:{
        alignSelf:'flex-start',
    },
    headerConatiner:{
        flexDirection:'row',
        alignContent:'flex-start',
        alignItems:'center',
        width:windowWidth,
        height:90,
        backgroundColor: "blue",
        shadowColor: "black",
    },
    logoTitle:{
        fontSize:20,
        fontWeight:'500',
        color:'white',
        marginTop:5,
        marginLeft:25
    },
    leftHeader:{
        flexDirection:'row',
        marginLeft:'auto',
    },
    leftHeaderIcons:{
        fontSize:30,
        marginRight:20,
        color:'white'
    },
    cartHolder:{
        flexDirection:"row",
        justifyContent:'flex-start',
        marginRight:20,
    },
    cartCount:{
        color:'white',
    },
    textWhite:{
        color:'white'
    }
});

export default style;