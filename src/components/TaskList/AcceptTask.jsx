import React from 'react'

const AcceptTask = () => {
  return (
    <div className='h-full  flex-shrink-0 items-center justify-between  rounded-xl w-[300px] bg-red-200'>
    <div className='flex items-center justify-between px-2'>
    <h2 className='text-sm mt-2 rounded-xl bg-red-700 p-2 font-semibold'>
             High task
         </h2>
         <h3 className='text-xl font-medium'>
             Accepeted Task
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
     <div className='flex justify-between'>
        <button className='px-2 bg-green-300 rounded-sm'>Mark as Completed</button>
        <button className='px-2 bg-red-300 rounded-sm'>Mark as Failed</button>
     </div>
    
 </div>

  )
}

export default AcceptTask