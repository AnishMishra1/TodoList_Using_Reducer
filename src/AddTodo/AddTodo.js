import React, { useState } from 'react'
import { addTodo } from '../action/TodoAction'
import { useDispatch } from 'react-redux'


const AddTodo = ({addTodo}) => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  
  return (
    <div>
      <input
          type='text'
          placeholder='Add Your list....'
          value={input}
          onChange={(e) => setInput(e.target.value) }
      />
      <button onClick={() =>
           addTodo(input)
      }>Add</button>
    </div>
  )
}

export default AddTodo