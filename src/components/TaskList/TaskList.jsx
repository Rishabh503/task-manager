import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
    // console.log(data)
  return (
    <div className='h-[400px] overflow-auto  p-5 mt-5 w-full flex flex-nowrap gap-10 items-center bg-purple-200'>
        {data.tasks.map((elem,i)=>{
            if(elem.active) return <AcceptTask key={i} data={elem}/>;
            else if(elem.new_task) return <NewTask key={i} data={elem}/>;
            else if(elem.completed) return <CompleteTask key={i} data={elem}/>;
            else if(elem.failed) return <FailedTask key={i} data={elem}/>;

        }
        )}
   
    </div>
  )
}

export default TaskList