import React from 'react'

const TodoReducers = (state, action) => {
  if(action.type == 'add_todo'){
    let todoText = action.payload.todoText;

    return [
        ...state, {id: state.length+1, todoData: todoText}
          
    ];

  }else if(action.type == 'edit_todo') {
    let todoText = action.payload.todoText;
    let todo = action.payload.todo
    const updatedList = state.map(t => {
        if(t.id == todo.id){
        todo.todoData = todoText
      }
      return t
    });
    return updatedList
    

  }else if(action.type == 'delete_todo'){
    let todo = action.payload.todo;
    const updatedList = state.filter(t => t.id != todo.id)
    return updatedList

  }
}

export default TodoReducers