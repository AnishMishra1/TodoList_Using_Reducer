import logo from './logo.svg';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo, editTodo } from './action/TodoAction';

function App() {
   const dispatch = useDispatch();
   const actions = bindActionCreators({addTodo, deleteTodo, editTodo}, dispatch)
   
  return (
    <>
        <AddTodo addTodo={actions.addTodo} />
        <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo}/>
    
    </>
    
        
     
    


  );
}

export default App;
