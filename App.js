import React,{useState} from "react";
import { SafeAreaView,StyleSheet} from "react-native";
import Datehead from './components/datehead';
import Addtodo from './components/Addtodo';
import Todolist from './components/todolist';
import Empty from './components/empty'
const App = () => {
  const today = new Date()
  const [todos, setTodos] =useState([
    {id: 1, text: '작업환경 설정', done:true},
    {id: 2, text: '리액트 네이티브 기초 공부', done:false},
    {id: 3, text: '투두리스트 만들어보기', done:false},
    
  ])
  
  return(
    <SafeAreaView style={styles.full}>
      <Datehead date={today}></Datehead>
      {todos.length === 0 ? <Empty/>:<Todolist todos={todos}/>} 
      
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