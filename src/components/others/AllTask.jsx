import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

// {"total": 5, "active": 2, "new_task": 1, "completed": 1, "failed": 1}
const AllTask = () => {
    const [userData,setUserData]=useContext(AuthContext)
    // console.log(AuthData)
  return (
    <div className='bg-slate-800 h-[500px] mt-2 p-5 flex flex-col gap-5 overflow-auto'>
        <div className='bg-orange-400 p-5 px-10 pr-20 w-full h-auto rounded-xl flex justify-between items-start gap-1'>
            <h2 className='font-semibold text-lg w-1/6 text-white bg-black border text-center  rounded-xl'>Name</h2>
              <h3 className='font-semibold text-xl w-1/6  bg-white border text-center  rounded-xl'>Total </h3>
              <h3 className='font-semibold text-xl w-1/6 border bg-blue-400 text-center  rounded-xl'>Active</h3>
              <h3 className='font-semibold text-xl w-1/6 border bg-yellow-400 text-center  rounded-xl' >New_task</h3>
              <h3 className='font-semibold text-xl w-1/6 border bg-green-500 text-center  rounded-xl'>Completed</h3>
              <h3 className='font-semibold text-xl w-1/6 border text-center bg-red-500  rounded-xl'>Failed</h3>
        </div>
        {userData.map((emp,i)=>{
            return(  <div key={i} className='bg-red-400 p-5 px-10 pr-20 w-full h-auto rounded-xl flex justify-between items-start gap-1'>
              <h2 className='font-semibold text-lg w-1/6 border-black border text-center  rounded-xl'>{emp.first_name}</h2>
              <h3 className='font-semibold text-xl w-1/6  border-white border text-center  rounded-xl'>{emp.tasks_count.total}</h3>
              <h3 className='font-semibold text-xl w-1/6 border border-blue-400 text-center  rounded-xl'>{emp.tasks_count.active}</h3>
              <h3 className='font-semibold text-xl w-1/6 border text-center border-yellow-300  rounded-xl' >{emp.tasks_count.new_task}</h3>
              <h3 className='font-semibold text-xl w-1/6 border text-center border-green-500  rounded-xl'>{emp.tasks_count.completed}</h3>
              <h3 className='font-semibold text-xl w-1/6 border text-center border-red-500  rounded-xl'>{emp.tasks_count.failed}</h3>
              
          </div>
            )
        }
    )}
        
    </div>
  )
}

export default AllTask