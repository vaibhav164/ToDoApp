import React from 'react';
import { 
          StyleSheet,
          Text, 
          SafeAreaView, 
          Image, 
          TouchableOpacity, 
          Button,
          Alert
       } from 'react-native';
       
import {useDeviceOrientation} from "@react-native-community/hooks";
const handlePress=()=>{
  console.warn("Text presed");
}
export default function App() {
  const {landscape} =useDeviceOrientation();
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Prompt"
              onPress={()=> Alert.prompt("Title","Message", (text) => console.warn(text))}  />
      <Text numberOfLines={1} onPress={handlePress} style={styles.txt}>Hello bro</Text>
      <TouchableOpacity>
         <Image  style={styles.img} source={{uri:"https://www.cookingclassy.com/wp-content/uploads/2019/05/fruit-salad-2.jpg"}}/>
      </TouchableOpacity>
      <Button title="Click Me" 
              onPress={() => Alert.alert("Warning" , "Stop it immediately", 
                      [{text:"Yes", onPress:() =>console.warn("Yes")} ,
                        {text:"No", onPress:() =>console.warn("No")}
                      ])}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height:200,
    width:200,
  },
  txt:{
    fontSize:30,
    color:"orange"
  }
});
