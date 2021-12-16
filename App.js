import React, { useState } from "react";
import { SafeAreaView,StyleSheet} from "react-native";
import Datehead from './components/datehead';
import Addtodo from './components/Addtodo';
import Empty from './components/empty'
import Ex from'./components/example';
const App = () => {
  const today = new Date()
  const [count,setrCount] = useState(0)

  const up= () =>setrCount(count+1)
  const down = () =>setrCount(count-1)
  
  return(
    <SafeAreaView style={styles.full}>
      <Datehead date={today}></Datehead>
      <Empty>
        
      </Empty>
      <Ex count={count} up={up} down={down}></Ex>
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