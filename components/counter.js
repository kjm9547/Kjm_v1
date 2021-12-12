import React from "react";
import {View,StyleSheet,Text,Button} from 'react-native';

function Counter({count,up,down}){
    return(
        <View style={styles.wrapper}> 
            <View style={styles.button_view}>
                <Text style ={styles.font}>{count}</Text>
            </View>
            <View style={styles.word_view}>
                <Button title="+1" onPress={up}/>
                <Button title="-1" onPress={down}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    font:{
        fontSize:24
    },
    wrapper:{
        flex:1,
        backgroundColor:'cyan'
    },
    word_view:{
        flex:5,
    },
    button_view:{
        flex:1
    }
})


export default Counter;
//app.js 소스
// import React, { useState } from "react";
// import { SafeAreaView,StyleSheet} from "react-native";
// import Counter from './components/counter'

// const App = () => {
//   const [count,setCount] =useState(0)

//   const up = () => setCount(count+1)
//   const down = () => setCount(count-1)
  
//   return(
//     <SafeAreaView style={styles.full}>
//       <Counter count={count} up={up} down={down}/>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   full:{
//     flex:1
//   }
// })
// export default App;