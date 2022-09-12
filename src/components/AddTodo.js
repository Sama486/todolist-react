import { useState } from 'react'
import Form from 'react-bootstrap/Form'

const AddTodo = ({ addTodo }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text || !day) {
            alert('please add task')
            return
        }

        addTodo({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <Form className='add-form' onSubmit={onSubmit}>
            <div className='frm-control'>
                <label className='text-primary'>Todo</label>
                <input type='text'
                    placeholder='Add Todo'
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='frm-control'>
                <label className='text-primary'>Day</label>
                <input type='text'
                    placeholder='Add Day'
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='frm-control form-control-check d-flex justify-content'>
                <label className='text-primary'>Reminder</label>
                <input type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type='submit'  value='Save Task' className='knopf btn-block' />
        </Form>
    )
}

export default AddTodo