import React from "react";
import {View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native'

function Todoitems({id,text,done,onToggle}){
    return(
        <View style={styles.itme}>
            <TouchableOpacity onPress={()=>onToggle(id)}>
                <View style={[styles.circle,done && styles.filled]}>
                    {done && (
                        <Image source={require('../assets/icons/check_white/check_white.png')}/>
                        )}
                </View>
            </TouchableOpacity>
            <Text style={[styles.text, done&& styles.lineThrough]}>
                {text}
            </Text>
            
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
        },
        filled:{
            backgroundColor:'#26a69a',
            justifyContent:'center',
            alignItems:'center'
        }
    }
)

export default Todoitems;