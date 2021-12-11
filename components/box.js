import React from "react";
import {View,StyleSheet} from 'react-native'

function Box(){
    return(
        <View style={styles.box}></View>
    )
}

const styles =StyleSheet.create({
    box: {
        width:64,
        height:64,
        backgroundColor: 'black'

    }
})

export default Box;