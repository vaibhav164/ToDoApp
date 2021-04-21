import React, {useState} from "react";
import {TextInput, Text, StyleSheet, View} from "react-native";

export default function Textinput(){
    const [name, setName]=useState("Vaibhav");
    const [age, setAge]=useState(25);
    return(
        <View style={color.container}> 
            <Text style={color.txt}>Enter Name</Text>
            <TextInput 
                multiline
                style={color.txtinput}
                onChangeText={(inputValue)=>setName(inputValue)} 
                placeholder={"E.g Vaibhav"}/>
        
            <TextInput 
                keyboardType='numeric'
                style={color.txtinput}
                onChangeText={(inputAge)=>setAge(inputAge)}
                placeholder={"e.g 25"}/>
            <Text style={color.txt}>My Name is {name} and age is {age}</Text>
        </View>
        
    );
}
const color=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"grey",
    },
    txt:{
        fontSize:20,
        fontWeight:"bold"
    },
    txtinput:{
        borderWidth:1,
        borderColor:"#777",
        padding:5,
        margin:10,
        width:250,
    }
})


