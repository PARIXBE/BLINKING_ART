import React,{FC,useEffect, useState} from "react";
import {View,Image} from "react-native";
import style from "./style";
const  ImageCarosule:FC=()=>{
    var imageArray = [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpghttps://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpghttps://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://i.redd.it/v1fvin01ynv51.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKj3rBeuGlHr4p__ubx0JMWWliL39nYMbklaKqNNmwCgBsVD7_bv1ja7i8kEKiu2F6mQY&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJl9jQR2IkdXShkLRVOmOpHc4DCG6fuk5n5dfEt5Hlz_ZXtakMdL0c5cp6Hw-njZiqNI&usqp=CAU",
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
    ]
    const [corsuleIndex,setCarouselIndex]=useState<any>()
    useEffect(() => {
        let timer=0;
        const interval = setInterval(() => {
            timer++;
            if(timer>4)
              timer=0;
            setCarouselIndex(imageArray[timer])
        }, 2500);
      }, []);
    return(
        <View style={style.container}>
            <Image
            style={style.imageView}
            source={{
                uri: corsuleIndex,
              }}
            />
        </View>
    )
}

export default ImageCarosule;