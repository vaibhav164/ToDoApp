import React from "react";
import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
const EditList =({name, presshandler})=>{
   
    return(
       <View>
        <TouchableOpacity
        onPress={()=> presshandler(name)}>
        <Text style={styles.text}>{name.Sname} {name.age}</Text>
        </TouchableOpacity>
       </View> 
    );
    
    
}
export default EditList;
const styles=StyleSheet.create({
    text:{
        borderRadius:10,
        borderWidth:1,
        padding:10,
        margin:10,
        fontSize:20,
        fontWeight:"bold",
        alignSelf:"center",
        width:450,
    }
})
