import React, { useState } from "react";
import { SafeAreaView,StyleSheet} from "react-native";
import Datehead from './components/datehead';
import Addtodo from './components/Addtodo';
import Empty from './components/empty'
const App = () => {
  const today = new Date()
  return(
    <SafeAreaView style={styles.full}>
      <Datehead date={today}></Datehead>
      <Empty></Empty>
      <Addtodo></Addtodo>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  full:{
    flex:1,
    backgroundColor:'white'
  }
})
export default App;