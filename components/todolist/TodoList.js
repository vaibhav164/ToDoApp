import React, {useState} from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from "react-native";
import Header from "./Header";
import EditList from "./EditList";
import AddList from "./AddList";
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
                currentState.filter(Student=>Student.Sid!=item.Sid)
            );
        })};//This filter function is working as same as in List component
    
        const submitHandler=(text)=>{
            setStudent((prevarray)=>{
                return([
                    {Sname:text, Sid: Math.round(Math.random()*100) , age: Math.round(Math.random()*100)},
                    ...prevarray
                ])
            })
           
        }
return(
    <View style={styles.container}>
    {/* Header*/}
    <Header />
        <View style={styles.body}>
            {/* Body*/}
            <AddList submithandler={submitHandler} /> 
            <View style={styles.flatlist}>
                <FlatList 
                keyExtractor={(item)=>item.Sid}
                    data={Student}
                    renderItem={({item: kuchbhi})=>(
                        <EditList name={kuchbhi} presshandler={pressHandler} />
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
