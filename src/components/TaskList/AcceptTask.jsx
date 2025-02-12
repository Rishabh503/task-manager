import React from 'react'

const AcceptTask = ({data}) => {
    // console.log(data ,"accep new task ka")
  return (
    <div className='h-full  flex-shrink-0 items-center justify-between  rounded-xl w-[300px] bg-yellow-400'>
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
             {  data.title}
         </p>
         <p>
          {data.desc}
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