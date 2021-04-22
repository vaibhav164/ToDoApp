import React, {useState} from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from "react-native";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import Header from "./Header";
import EditList from "./EditList"
const TodoList = ()=>{
    const [Student,setStudent]=useState([
        {Sname:"Vaibhav", Sid:1, age:25},
        {Sname:"Arman", Sid:2, age:24},
        {Sname:"Ajay", Sid:3, age:24},
        {Sname:"Vishal", Sid:4, age:22},
    ]);

    const pressHandler =(item)=>{
        setStudent((currentState)=>{
            return(
                currentState.filter(Student=>Student.item!=item)
            );
        })};//This filter function is working as same as in List component
    
return(
    <View style={styles.container}>
    {/* Header*/}
    <Header />
        <View style={styles.body}>
            {/* Body*/}
            <View style={styles.flatlist}>
                <FlatList 
                keyExtractor={(item)=>item.Sid}
                    data={Student}
                    renderItem={({item: kuchbhi})=>(
                        <EditList name={kuchbhi} presshandler={pressHandler}/>
                               )}
                />    
            </View>
        </View>
    </View>
)
}
export default TodoList;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        padding:10,
        // // justifyContent:"center",
        // alignItems:"center",
    },
    body:{
        padding:10,
    },
    flatlist:{
        padding:10,
    }
});
