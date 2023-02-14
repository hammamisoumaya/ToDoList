import React, { useState } from 'react'

const AddToDo = ({handeladd}) => {
    const[input,setinput]=useState('')
    const AddToDo =()=>{
        handeladd(
            {
                isDone:false,
                id:Math.random(),
                text:input
            }
        )
    }
  return (
    <div>
        <input type="text" placeholder='put your element' onChange={(e)=>setinput(e.target.value)}/>
   <button onClick={()=>AddToDo()}>Add</button>
   
   
    </div>
  )
}

export default AddToDo