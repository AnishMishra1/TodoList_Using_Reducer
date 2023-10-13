import logo from './logo.svg';
import './App.css';
import TodoContext from './Context/TodoContext';
import AddTodo from './AddTodo/AddTodo'
import TodoList from './TodoList/TodoList'
import { useReducer, useState } from 'react';
import TodoReducers from './reducers/TodoReducers';
import TodoDispatchContext from './Context/TodoDispatchContext';
function App() {
  
    // const [list, setList] = useState([
    //   {id:1, todoData: 'todo 1'},
    //   {id:2, todoData: 'todo 2'},
    // ])
   const [list, dispatch] = useReducer(TodoReducers, [])
  return (
    


    <TodoContext.Provider value={{list}}>
      <TodoDispatchContext.Provider value={{dispatch}}>
         <AddTodo />
         <TodoList/>

      </TodoDispatchContext.Provider>


      

    </TodoContext.Provider>
  );
}

export default App;
