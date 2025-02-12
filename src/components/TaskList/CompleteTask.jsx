import React from 'react'

const CompleteTask = () => {
  return (
    <div className='h-full  flex-shrink-0 items-center justify-between  rounded-xl w-[300px] bg-green-200'>
    <div className='flex items-center justify-between px-2'>
    <h2 className='text-sm mt-2 rounded-xl bg-red-700 p-2 font-semibold'>
             High task
         </h2>
         <h3 className='text-xl font-medium'>
             Compeleted Task
         </h3>
    </div>
     <div className='mt-5'>
         <p className='text-center font-bold text-xl '>
             make a new video
         </p>
         <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iusto repellat natus ipsum? Eligendi, iure? Sequi cupiditate laborum rem eveniet! Delectus, minima voluptatibus? Vero, nisi. Magnam inventore blanditiis nobis natus.
         </p>
     </div>
     <div>
        <button className='bg-green-400 px-2'>
            task completed
        </button>
     </div>
    
 </div>
  )
}

export default CompleteTask