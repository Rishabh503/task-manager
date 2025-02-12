import React from 'react'

const NewTask = ({data}) => {
   //  console.log(data ,"new task ka")
    return (
        <div className='h-full  flex-shrink-0 items-center justify-between  rounded-xl w-[300px] bg-blue-400'>
        <div className='flex items-center justify-between px-2'>
        <h2 className='text-sm mt-2 rounded-xl bg-red-700 p-2 font-semibold'>
              {data.category}
             </h2>
             <h3 className='text-xl font-medium'>
                {data.date}
             </h3>
        </div>
         <div className='mt-5'>
             <p className='text-center font-bold text-xl '>
                {data.title}
             </p>
             <p>
                {data.desc}
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

export default NewTask