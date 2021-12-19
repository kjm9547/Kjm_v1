import React from "react";
import { FlatList,View,Text,StyleSheet } from "react-native";

function Todolist({todos}){
    return(
        <FlatList
        data={todos}
        renderItem={({item})=>(
            <View>
                <Text>{item.text}</Text>
            </View>
        )}
        keyExtractor={item=>item.id.toString()}>
        </FlatList>
        
    )
}


export default Todolist;