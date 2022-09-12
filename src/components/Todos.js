import Todo from "./Todo"
const Todos = ({todos, deleteTask, toggleReminder}) => {
  return (
    <div className="text-white">
         {todos.map((todo)=> (
            <Todo toggleReminder={toggleReminder}  key={todo.id} todo={todo} deleteTask={deleteTask}/>
        ))}
    </div>
  )
}

export default Todos