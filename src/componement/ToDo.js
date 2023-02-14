import React from 'react'

export const ToDo = ({todo,deletehandel,deletedone}) => {
const deletTodo=()=>{
    deletehandel(todo.id)
}
const done=()=>{
  deletedone(todo.id)
}

  return (
    <div>
        <ul style={{display:'flex'}}>
            <li style={todo.isDone ? {background:"red"} : {}}>
                {todo.text}
            </li>
            <button onClick={()=>deletTodo()}>remove</button>
            <button onClick={()=>done()}> { todo.isDone ? "yep you did it" : "Done"} </button>
        </ul>
    </div>
  )
}
