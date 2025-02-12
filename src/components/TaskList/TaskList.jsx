import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
    console.log(data)
  return (
    <div className='h-[400px] overflow-auto  p-5 mt-5 w-full flex flex-nowrap gap-10 items-center bg-emerald-500'>
        {data.tasks.map((elem)=>{
            if(elem.active) return <AcceptTask/>;
            else if(elem.new_task) return <NewTask/>;
            else if(elem.completed) return <CompleteTask/>;
            else if(elem.failed) return <FailedTask/>;

        }
        )}
   
    </div>
  )
}

export default TaskList