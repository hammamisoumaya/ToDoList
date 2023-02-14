import React from 'react'
import { ToDo } from './ToDo'
const ToDoList = ({todo,deletehandel,deletedone}) => {
    console.log('todo',todo)
  return (
    <div>
        {todo.map((e)=><ToDo todo={e}   deletehandel={deletehandel} deletedone={deletedone}/>)}
       
    </div>
  )
}

export default ToDoList