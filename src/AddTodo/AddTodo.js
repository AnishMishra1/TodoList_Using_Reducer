import React, { useContext, useState } from 'react'
import TodoDispatchContext from '../Context/TodoDispatchContext'

const AddTodo = () => {

    const [input, setInput] = useState('')
    const {dispatch} = useContext(TodoDispatchContext)
  return (
    <div>
        <input 
             type='text'
             placeholder='writie the things'
             value={input}
             onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => {
            
            dispatch({type: 'add_todo', payload:{todoText:input}})
            
            
        }
        
        }>Add</button>
    </div>
  )
}

export default AddTodo