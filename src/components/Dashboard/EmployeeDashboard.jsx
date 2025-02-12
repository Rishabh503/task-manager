import React from 'react'
import Header from '../others/Header'
import {TasksListTop} from '../others/TasksListTop'
import TaskList from '../TaskList/TaskList'

export const EmployeeDashboard = (props) => {
  // console.log(props)
  return (
    <div className='bg-slate-800 p-1 min-h-screen w-auto'>
      <h1 className='text-white'>
        {props.data.id}
      </h1>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TasksListTop data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

// export default EmployeeDashboard