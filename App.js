import React, { useState } from "react";
import { SafeAreaView,StyleSheet} from "react-native";
import Datehead from './components/datehead'

const App = () => {
  const today = new Date()
  return(
    <SafeAreaView style={styles.full}>
      <Datehead date={today}></Datehead>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  full:{
    flex:1
  }
})
export default App;