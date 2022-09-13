import React, {useRef} from 'react'
import { Task } from '../../../models/task.class'
import Proptypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum'

const TaskForm = ( {add} ) => {

  const nameRef = useRef('')
  const descriptionRef = useRef('')
  const levelRef = useRef('')

  function addTask(e) {
    e.preventDefault()
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    )
    add(newTask)
  }

  return (
    <form onSubmit={addTask} className= 'd-flex justify-content-center align-items-center mb-4' >
      <div className='form-outline flex-fill'>
        <input ref={nameRef} id='inputName' type='text' className= 'form-control formcontrol-lg' required autoFocus placeholder='Task Name' />
        <input ref={descriptionRef} id='descriptionName' type='text' className= 'form-control formcontrol-lg' required placeholder='Task Description' />
        <label htmlFor="selectLevel" className='sr-only'>Priority</label>
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' required>
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENT}>Urgent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
        <button type='submit' className='btn btn-success btn-lg ms-3'>Add</button>
      </div>
    </form>
  )
}

TaskForm.Prototypes = {
  add: Proptypes.func.isRequired
}

export default TaskForm