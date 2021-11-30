import React,{FC} from "react";
import { View,Text,Image,ScrollView } from "react-native";
import style from "./style";
const BreadCrumbs:FC=()=>{
    return(
        <View style={style.container}>
            <ScrollView horizontal={true}>
                <View style={style.categoryBlock}>
                    <Image 
                        style={style.categoryImage}
                        source={{uri:"https://i.redd.it/v1fvin01ynv51.jpg"}}
                    />
                    <Text>Breadcrumbs</Text>
                </View>
            </ScrollView>
        </View>
    )    
}

export default BreadCrumbs;