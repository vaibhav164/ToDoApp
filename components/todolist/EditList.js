import React from "react";
import {View, TouchableOpacity, Text, StyleSheet, TextInput} from "react-native";
import { Ionicons} from '@expo/vector-icons';
const EditList =({name, presshandler})=>{
   
    return(
       <View style={styles.container}>
        <TouchableOpacity
            style={styles.touchOp}
        onPress={()=> presshandler(name)}>
         <Ionicons name='trash-outline' color="#333" size={30}/>
        <Text style={styles.text}>{name.Sname} {name.age}</Text>
        </TouchableOpacity>
       </View> 
    );
    
    
}
export default EditList;
const styles=StyleSheet.create({
    text:{
        padding:10,
        margin:10,
        fontSize:20,
        fontWeight:"bold",
        alignSelf:"center",
        width:350,
    },
    touchOp:{
        borderRadius:10,
        borderWidth:1,
        flexDirection:"row",
    }

    
})
