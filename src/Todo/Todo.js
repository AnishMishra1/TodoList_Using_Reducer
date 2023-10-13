import React, { useState } from 'react'

const Todo = ({todoData, onDelete, onEdit}) => {
    const [editing, setEdit] = useState(false)
    const [editText, setEditText] = useState('')
  return (
    <div>
       
        <input
            type='checkbox'
        />        
        {
            (editing)? <input type='text'
                    
                        value = {editText}
                        onChange={(e) =>
                        
                        setEditText(e.target.value)}
                        />
                         :
                        <span>{todoData}</span>
        }
       
        <button onClick={() =>{
                                     setEdit(!editing)
                                     onEdit(editText)
                                     
        }}>{(!editing)? "edit" :"save" }</button>
        <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Todo