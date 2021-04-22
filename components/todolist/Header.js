import React from "react";
import {StyleSheet, View, Text} from "react-native";
const Header =()=>{
    return(
        <View style={styles.header}>
            <Text style={styles.textHeader}>My TodoList</Text>
        </View>
    );

}
const styles=StyleSheet.create({
    header:{
        height:100,
        backgroundColor:"coral",
        justifyContent:"center",
    },
    textHeader:{
        fontSize:30,
        color:"#fff",
        alignSelf:"center",
    }
});
export default Header;