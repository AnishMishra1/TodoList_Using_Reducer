import React, { useContext, useState } from 'react'
import TodoContext from '../Context/TodoContext'
import Todo from '../Todo/Todo'
import TodoDispatchContext from '../Context/TodoDispatchContext';


const TodoList = () => {
     const {list} = useContext(TodoContext);
     const {dispatch} = useContext(TodoDispatchContext);

      function onDelete(todo) {dispatch({type: 'delete_todo', payload:{todo}}) }

      function onEdit(todo, todoText) {dispatch({type: 'edit_todo', payload:{todoText, todo}})
        
      }

      return (
            <div>
                  {list.length > 0 &&
                    list.map((todo) => 
                         <Todo
                            key={todo.id}
                            id={todo.id}
                            todoData={todo.todoData}
                            onDelete= {() => onDelete(todo)}
                            onEdit = {(todoText) => { onEdit(todo,todoText)}}
                         />)}
        
        
    </div>
    
  )
}

export default TodoList