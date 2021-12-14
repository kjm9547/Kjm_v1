import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native';

function Empty(){
    return(
        <View style={styles.block}>
            <Image source={require('../assets/images/young_and_happy.png')} style={styles.image}/>
            <Text style={styles.word}>할 일이 없습니다</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    word:{
        fontSize:24,
        color:'#9e9e9e'
    },
    image:{
        width:240,
        height:179,
        resizeMode:'center',
        marginBottom:16
    }
})

export default Empty;