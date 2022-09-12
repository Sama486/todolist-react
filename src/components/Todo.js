import React from 'react'
import { FaTimes } from 'react-icons/fa'


const Todo = ({ todo, deleteTask, toggleReminder }) => {
  return (
    <div className={`task ${todo.reminder ? 'reminder' : 'noReminder'}` } onDoubleClick={() => toggleReminder(todo.id)}>
      <h3 className='d-flex justify-content-between'>
        {todo.text}
        <FaTimes onClick={() => deleteTask(todo.id)} style={{ color: 'rgb(209, 0, 63)', cursor: 'pointer', marginTop: '2' }} />
      </h3>
      <p>{todo.day}</p>
    </div>
  )
}

export default Todo