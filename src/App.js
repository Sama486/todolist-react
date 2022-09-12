import Header from "./components/Header";
import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo";
import { useState } from "react"

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false)
  const [todos, setTodos] = useState([
    {
      id:1,
      text:'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
  },
  {
      id:2,
      text:'Meeting at school',
      day:'Feb 6th at 1:30pm',
      reminder:true
  },
  {
      id:3,
      text:'Food shopping',
      day:'Feb 5th at 2:20pm',
      reminder:false
  }
  ])

  const deleteTask = (id) => {
    console.log('delete Task '+ id)
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const addTodo = (todo) => {
    console.log('todo added')
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }

  const toggleReminder = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo,reminder : !todo.reminder} : todo))
  }

  return (
    <div className=" container2">
      <Header 
      onAdd={() => setShowAddTodo(!showAddTodo)}
      showAdd={showAddTodo}/>
      {showAddTodo && <AddTodo addTodo={addTodo}/>}
      <Todos  todos={todos} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
    </div>
  );
}

export default App;
