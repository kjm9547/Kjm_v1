import React from "react";
import {View,Text,StyleSheet} from 'react-native'

function Todoitems({id,text,done}){
    return(
        <View style={styles.itme}>
            <View style={styles.circle}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    )

}

const styles = StyleSheet.create(
    {
        itme:{
            flexDirection:'row',
            padding:16,
            alignItems:'center'
        },
        circle:{
            width: 24,
            height: 24,
            borderRadius:12,
            borderColor:'#26a69a',
            borderWidth:1,
            marginRight:16
        },
        text:{
            flex:1,
            fontSize:16,
            color:'#212121'
        }
    }
)

export default Todoitems;