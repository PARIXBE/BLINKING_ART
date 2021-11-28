import React from "react";
import { View,Text,Image } from "react-native";
import style from "./style";
export default function Flash(){
    return(
        <View style={style.container}>
             <Image 
                source={require('../../assets/images/Blinkingart.png')} 
                style={style.logo}/>
        </View>
    )
}
