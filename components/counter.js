import React from "react";
import {View,StyleSheet,Text,Button} from 'react-native';

function Counter({count,up,down}){
    return(
        <View> 
            <View>
                <Text style ={styles.font}>{count}</Text>
            </View>
            <View>
                <Button title="+1" onPress={up}/>
                <Button title="-1" onPress={down}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    font:{
        fontSize:24
    }
})


export default Counter;