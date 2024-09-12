import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { addTodo , toggleTodo , removeTodo } from "../redux/reducer";

const ToDoList = () => {

    const [newTodo , setNewTodo] = useState('')
    const todos = useSelector((state)=> state.todos.items)
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (newTodo.trim()){
            dispatch(addTodo(newTodo.trim()))
            setNewTodo('')
        }
    }

    return ( 
        <>
     <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
        </>
     );
}
 
export default ToDoList;