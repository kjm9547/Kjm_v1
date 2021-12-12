import React from "react";
import {Text,View,StyleSheet} from 'react-native'

function Datehead({date}){
    const year =date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    return(
        <View style={styles.headline}>
            <Text style={styles.datetext}>
                {year} + {month} + {day}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headline:{
        backgroundColor:'#26a69a',
        padding:17
    },
    datetext:{
        fontSize:24,
        color:'white'
    }
})
export default Datehead;