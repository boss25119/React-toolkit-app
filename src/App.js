import { useSelector, useDispatch } from 'react-redux';
import todoSlice from './Redux/Counter/todoSlice'
import { useState } from 'react';
import  {v4} from 'uuid'
import './App.css';

function App() {
  const [todo, setTodo] = useState('') 
  const todoLists = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(todoSlice.actions.addPost({
      id : v4(),
      name : todo,
      completed : false
    }))
    setTodo('')
  }

  const handleToggle = (id) => { 
    dispatch(todoSlice.actions.toggleTodoStatus(id))
    
  }

  console.log(todo)
  return (
    <div className="App">
      <input type= "text" placeholder= "Enter your task" onChange = {((e) => setTodo(e.target.value))} />
      <button onClick = {handleSubmit}>Add</button>
      <button>Delete</button>
      <ul>
        {todoLists.map((todo, index) => (
          <li key={index}>
            {todo.name}
            <span onClick = {handleToggle}>&times;</span>
          </li> 
        ))}
      </ul>
    </div>
  );
}

export default App;
