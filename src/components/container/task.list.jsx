import React, {useState, useEffect} from 'react'
import { levels } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, levels.NORMAL)
    
    //Estado del componente
    const [tasks, settasks] = useState(defaultTask)
    const [loading, setloading] = useState(true)

    //Control del ciclo de vida del componente
    useEffect(() => {
      console.log('Task state has been modified')
      setloading(false)
      return () => {
        console.log('Task list component is going to unmount...')
      }
    }, [tasks])
    

    const changeCompleted = (id) => {
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
