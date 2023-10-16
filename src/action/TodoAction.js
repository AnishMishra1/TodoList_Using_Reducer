import { ADD_TODO,DELETE_TODO,EDIT_TODO } from "../constant/action";

export const addTodo = (input) => ({type:ADD_TODO, payload:{todoText:input}});
export const deleteTodo = (todo) => ({type: DELETE_TODO, payload:{todo}});
export const editTodo = (todo, todoText) => ({type:EDIT_TODO , payload:{todo, todoText}});