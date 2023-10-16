import React, { useState } from 'react'

const Todo = ({todoData, onEdit, onDelete}) => {
      const[editing, SetEditing] = useState(false)
      const[inputText, setInputText] = useState('')
  return (
    <div>
        

        {(editing) ?<input 
                         type='text'
                         value={inputText}
                         onChange={(e) => setInputText(e.target.value)}
                         placeholder='Edit the exist things'
        
        /> : <span>{todoData}</span>}
        <button onClick={
          () => {{SetEditing(!editing)
                 onEdit(inputText)                     }
        }}>{(!editing) ? 'edit' : 'save'}</button>

        <button onClick={onDelete}>Delete</button>

    </div>
  )
}

export default Todo