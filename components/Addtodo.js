import React, {useState} from "react";
import {View,Text,StyleSheet, TextInput,Image} from 'react-native';

function Addtodo(){
    
    const [text,setText] = useState('');
    console.log(text);
    return(
<View style={styles.block}>
        <TextInput placeholder="할일을 입력하세요" style={styles.imput}
        value={text} onChangeText={setText}></TextInput>
        <View>
            <Image source={require('../assets/images/young_and_happy.png')} style={styles.bt_st}></Image>
        </View>
</View>
    )
}

const styles = StyleSheet.create({
    block:{
        height:64,
        paddingHorizontal:16,
        borderColor:'#bdbdbd',
        borderTopWidth:1,borderBottomWidth:1,
        justifyContent:'center'
    },
    imput:{
        fontSize:16,
        paddingVertical:8,
    },
    bt_st:{
        alignItems:'center',
        justifyContent:'center',
        width:48,
        height:48,
        borderRadius:24,
        backgroundColor:'#26a69a'

    }
})

export default Addtodo;