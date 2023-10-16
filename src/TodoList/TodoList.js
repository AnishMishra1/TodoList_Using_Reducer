import React from 'react'

import Todo from '../Todo/Todo'
import { useDispatch, useSelector } from 'react-redux'

const TodoList = ({editTodo, deleteTodo}) => {

  const dispatch = useDispatch()
  const list = useSelector((state) => state.todo)

  

   function onEdit(todo, todoText) {
     editTodo(todo, todoText)
   }
   function onDelete(todo) { deleteTodo(todo)}
    
  return (
    <div>
      {list.map((todo) => <Todo
                               id={todo.id}
                               key={todo.id}
                               todoData ={todo.todoData}
                               onEdit={(todoText) => onEdit(todo,todoText)}
                               onDelete ={() => onDelete(todo)}
                           
                           
                           
                           
                           
                           />)}
    </div>
  )
}

export default TodoList