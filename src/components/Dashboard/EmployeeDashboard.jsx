import React from 'react'
import Header from '../others/Header'
import {TasksListTop} from '../others/TasksListTop'
import TaskList from '../TaskList/TaskList'

export const EmployeeDashboard = ({data}) => {
  console.log({data})
  return (
    <div className='bg-slate-800 p-1 min-h-screen w-auto'>
      <h1 className='text-white'>
        {data.id}
      </h1>
        <Header data={data}/>
        <TasksListTop data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

// export default EmployeeDashboard