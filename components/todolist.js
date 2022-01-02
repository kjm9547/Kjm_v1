import React from "react";
import { FlatList,View,Text,StyleSheet } from "react-native";
import Todoitems from "./todoitems";

function Todolist({todos,onToggle}){
    return(
        <FlatList 
        ItemSeparatorComponent={()=><View style={styles.separator}/>}
        style={styles.list}
        data={todos}
        renderItem={({item})=>(
            <Todoitems id={item.id}
             text={item.text}
              done={item.done}
              onToggle={onToggle}></Todoitems>
        )}
        keyExtractor={item=>item.id.toString()}>
        </FlatList>
        
    )
}

const styles = StyleSheet.create({
    list:{
        flex:1
    },
    separator:{
        backgroundColor:'#e0e0e0',
        height:1,
    }
})

export default Todolist;