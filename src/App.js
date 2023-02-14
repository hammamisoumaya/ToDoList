import React ,{ useState } from 'react';
import './App.css';
import AddToDo from './componement/AddToDo';
import ToDoList from './componement/ToDoList';
function App() {
//fake data
const [todo,settodo]=useState([
{text:'first to do list',id:1,isDone:false},
{text:'second to do list',id:2,isDone:false},
{text:'third to do list',id:3,isDone:false}
]
)

//partie remove
const deletehandel=(ID)=>{
  settodo(todo.filter((e)=>e.id !== ID))
}

//partie done
const deletedone=(ID)=>{
  settodo(todo.map((el)=>el.id === ID  ? {...el,isDone : !el.isDone}   : el   ))
}
//add element
const handeladd=(newtodo)=>{
  settodo(
[...todo,newtodo]
  )
}

  return (
    <div className="App">
      <h1>To Do App</h1>
      <p>Add To Do</p>
      
      <AddToDo handeladd={handeladd}/>


      <hr/>
      <p>To Do List</p>
      <ToDoList     todo={todo}  deletehandel={deletehandel} deletedone={deletedone}  />
    </div>
  );
}

export default App;
