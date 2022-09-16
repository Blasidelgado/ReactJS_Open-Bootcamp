import React, {useState, useEffect} from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskForm from '../pure/forms/taskForm'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', true , LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Description2', false , LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Description3', false , LEVELS.BLOCKING)
    
    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
    const [loading, setloading] = useState(true)

    //Control del ciclo de vida del componente
    useEffect(() => {
      console.log('Task state has been modified')
      setloading(false)
      return () => {
        console.log('Task list component is going to unmount...')
      }
    }, [tasks])
    
    function completeTask(task) {
      console.log('Complete this Task: ', task)
      const index = tasks.indexOf(task)
      const tempTasks = [...tasks]
      tempTasks[index].completed = !tempTasks[index].completed
      //We update the state of the component  with the new list of tasks and it will update
      // the Iteration of the tasks in order to show the task updated
      setTasks(tempTasks)
    }

    function deleteTask(task) {
      console.log('Deleting this task: ', task)
      const index = tasks.indexOf(task)
      const tempTasks = [...tasks]
      tempTasks.splice(index, 1)
      setTasks(tempTasks)
    }

    function addTask(task) {
      console.log('Adding task: ', task)
      const tempTasks = [...tasks]
      tempTasks.push(task)
      setTasks(tempTasks)
    }

    return (
      <div>
        <div className='col-12'>
          <div className='card'>
            {/* Card Header (title) */}
            <div className='card-header p3'>
              <h5>Your tasks:</h5>
            </div>
            {/* Card Body (content) */}
            <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
              <table>
                <thead>
                  <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => {
                    return (
                      <TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask} />
                      )
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* TODO : Aplicar un for/Map para renderizar una lista */}
        {/* <TaskComponent task={defaultTask}/> */}
      <TaskForm add={addTask} />
    </div>
  )
}

export default TaskListComponent
