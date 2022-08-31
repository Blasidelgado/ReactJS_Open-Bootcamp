import React from 'react'
import { levels } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/forms/task'

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, levels.NORMAL)

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }
  
    return (
    <div>
        <h1>
            Your tasks:
        </h1>
        {/* TODO : Aplicar un for/Map para renderizar una lista */}
        <TaskComponent task={defaultTask}/>
    </div>
  )
}

export default TaskListComponent
