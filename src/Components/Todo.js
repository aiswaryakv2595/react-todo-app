import React from "react";
import '../App.css'
import { useState } from "react";

function Todo() {
    const [todo,setTodo] = useState('') // type cheyyunnathinte list
    const [todos,setTodos] = useState([]) //list item
   
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
   
    const addTodos = ()=>{
        if (todo.trim()) {
            const isDuplicate = todos.find((item) => item.list === todo.trim())
            console.log(isDuplicate)
            if (!isDuplicate) {
                setTodos([...todos, { list: todo.trim(), id: Date.now(), status: false }])
                setTodo('')
              }
        }
    }
    const onComplete = (id)=>{
        let complete = todos.map((list) => {
            if(list.id === id){
                return ({...list,status:!list.status})
            }
            return list
        })
        setTodos(complete)
    }
  
    return(
        <div className="container">
            
        <h1>ToDo List</h1>
      
           <form className="form-group" onSubmit={handleSubmit}>
            <input type="text" value={todo} className="form-control" onChange={(e)=>setTodo(e.target.value)} placeholder="Enter Todo"/>
            <button onClick={addTodos}><i class="fa-solid fa-plus"></i></button>
           </form>
           <div className="list">
            <ul>
                {
                    todos.map((todo)=>(
                        <li className="list-items">
                            <div className="list-item-list" id={todo.status ? 'list-item':''}>{todo.list}</div>
                            
                        <span>
                        <i className="fa-solid fa-check-double list-item-icons" id="complete" onClick={()=>onComplete(todo.id)}></i>
                        <i className="fa-solid fa-xmark list-item-icons" id="delete" onClick={()=>setTodos(todos.filter((to) => to.id !== todo.id))}></i>
                        </span>
                        </li>
                    ))
                }
            </ul>
           </div>
        </div>
    )
}
export default Todo