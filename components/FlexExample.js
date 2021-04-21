import React from "react";
import {View, Text} from "react-native";


export default function FlexExample(){
    return(
        <View style={{
            backgroundColor:"#fff",
            flex:1,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            // flexWrap:"wrap",
            // alignContent:"center",
        }}
        >
        <View style={{
            backgroundColor:"dodgerblue",
            // flexBasis:100,//it maps width for flexDirection row and hight for column
            height:300,
            width:100,
            borderRadius:15,
            // flexShrink:1,// if the size is too big that not every content is not fitting on screen use it ti will adjust so that everything fits on screen
            // flexGrow:1, //it will acquire the complete space of width for FD row and height for FD column
        }}/>
        <View style={{
            backgroundColor:"orange",
            height:200,
            width:100,
            borderRadius:30,
            position:"absolute",
            top:10,
        }}/>
        <View style={{
            backgroundColor:"tomato",
            height:100,
            width:100,
            borderRadius:50,
        }}/>
        </View>
    );

}