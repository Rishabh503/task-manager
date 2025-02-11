import React from 'react'
import Header from '../others/Header'
import {TasksListTop} from '../others/TasksListTop'
import TaskList from '../TaskList/TaskList'

export const EmployeeDashboard = () => {
  return (
    <div className='bg-slate-800 p-1 min-h-screen w-auto'>
        <Header/>
        <TasksListTop/>
        <TaskList/>
    </div>
  )
}

// export default EmployeeDashboard