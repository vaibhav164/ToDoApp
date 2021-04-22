import React, {useState} from "react";
import {StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity} from "react-native";

function List(){
    const [people, setpeople]=useState([
        {name:"Vaibhav", id:1},
        {name:"Vishal",id:2},
        {name:"Ajay",id:3},
        {name:"Ravi",id:4},
        {name:"Arman",id:5},
        {name:"Sachin",id:6},
        {name:"Nitin",id:7},
        {name:"Tarun",id:8},
        {name:"Abhishek",id:9},            
    ]);

    const pressHandeler = (item) => {
        console.warn(item.id);
        setpeople((currentpeople)=>{
            return(
                currentpeople.filter(people=>people.id!=item.id)
            )});// in this **setpeople** when we pass a function we default get current state thus using it
            // and then using filter function it checks that the current people id is not equal to the id 
            //of the passed item of presshandeler if true then accet it when faulse removeit from array.
    }    

    return(
        <View style={StyleSheet.container}>

          <FlatList 
          numColumns={2} //to make items render in 2 columns 
          keyExtractor={(item)=>item.id}
          data={people}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=> pressHandeler(item)}>  
                <Text style={styles.listitems}>{item.name}</Text>
            </TouchableOpacity>   //   using Touchable opacity to view touch effect on each item and on press
                                //  calling a function which returns the warning of id of item pressed
          )}
          />  
          {/* <ScrollView>
          {people.map(item =>(
                    <View style={styles.container} key={item.key}>
                      <Text style={styles.listitems}>{item.name}</Text>
                    </View>
            ))}
          </ScrollView> */}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        paddingTop:15,
        paddingHorizontal:20,
        marginHorizontal:10,
    },
    listitems:{
        backgroundColor:"dodgerblue",
        marginTop:20,
        padding:20,
        fontSize:40,
        marginHorizontal:10,
    }
})
export default List;