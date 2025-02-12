import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'

export const TasksListTop = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        {/* ek box  */}
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-500'>
            <h2 className='text-3xl font-semibold'>
                {data.tasks_count.new_task}
            </h2>
            <h3 className='text-xl font-medium'>
                New Task
            </h3>
        </div>
        {/* <AcceptTask/> */}
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-500'>
            <h2 className='text-3xl font-semibold'>
            {data.tasks_count.active}
            </h2>
            <h3 className='text-xl font-medium'>
                Active Task
            </h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-green-500'>
            <h2 className='text-3xl font-semibold'>
            {data.tasks_count.completed}
            </h2>
            <h3 className='text-xl font-medium'>
                Completed Task
            </h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-500'>
            <h2 className='text-3xl font-semibold'>
            {data.tasks_count.failed}
            </h2>
            <h3 className='text-xl font-medium'>
                Failed Task
            </h3>
        </div>
    </div>
  )
}

// export default TasksList