import React, { useState } from "react";
import { SafeAreaView} from "react-native";
import Counter from './components/counter'

const App = () => {
  const [count,setCount] =useState(0)

  const up = () => setCount(count+1)
  const down = () => setCount(count-1)
  
  return(
    <SafeAreaView>
      <Counter count={count} up={up} down={down}/>
    </SafeAreaView>
  )
}


export default App;