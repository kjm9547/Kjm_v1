import React from "react";
import {Text,View,Button} from 'react-native'

function Ex({count,up,down}){
    return(
        <View>
            <Text> {count}</Text>
            <Button title="up" onPress={up}>
            </Button>         
            <Button title="down" onPress={down}>
            </Button>   
        </View>
    )
}

export default Ex;