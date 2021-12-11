import React from "react";
import {View,StyleSheet,Text} from 'react-native'

function Box(props){
    return(
        <>
        <View style={[styles.box, 
            props.rounded ?styles.rounded:null,
             sizes[props.size],{backgroundColor:props.color}]}>
            
        </View>
        <View>
            <Text>hi {props.name}</Text>
        </View>
        </>
    )
}

const styles =StyleSheet.create({
    box: {
        width:64,
        height:64,
        

    },
    rounded: {
        borderRadius: 16
    },
    small: {
        width:100,
        height:100,
        backgroundColor:'black'
    }
})

const sizes = {
    small:styles.small,
    mid:styles.box
}


export default Box;