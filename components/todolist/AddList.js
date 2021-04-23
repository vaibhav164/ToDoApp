import React,{useState} from "react";
import {StyleSheet, View, TextInput, Button} from "react-native";
export default function AddList({submithandler}){
    const [text, setText]=useState('');
    const changeTextHandler=(val)=>{
        setText(val);
    }
    return(
        <View>
            <TextInput  
                placeholder="New todo..."
                onChangeText={changeTextHandler}
                style={styles.inputText}
            />
            <Button 
            title="Add Todo"
            onPress={()=>submithandler(text)}
            color="coral"/>
        </View>
        
    );
}
const styles=StyleSheet.create({
    inputText:{
        borderWidth:1,
        borderColor:"#7777",
        marginVertical:5,
        height:35,
        borderRadius:10,
        padding:5
    }
})
