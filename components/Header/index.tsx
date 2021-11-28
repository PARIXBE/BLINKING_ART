import React,{FC} from "react";
import {View,Text} from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
interface Props{
    lable:string;
}
const Header:FC<Props>=(props)=>{
    return(
        <View style={style.container}>
            <View style={style.headerConatiner}>
                <Text style={style.logoTitle}>Blinking art</Text>
                <View style={style.leftHeader}>
                    <View style={style.cartHolder}>
                        <Ionicons name="cart" size={30} color="green" style={style.textWhite}/>
                        <Text style={style.cartCount}>0</Text>
                    </View>
                    <Ionicons name="rocket" color="green" style={style.leftHeaderIcons}/>
                </View>
            </View>
        </View>
    )
}


export default Header;