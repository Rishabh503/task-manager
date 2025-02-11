import React from 'react'

const CreateTask = () => {
  return (
    <div>
            <form className='flex border border-red-300 text-white flex-wrap items-start justify-between p-4 ' >
                <div className='w-1/2 flex flex-col gap-5'>
                            <div>
                                <h3>Task title</h3>
                                <input   className='bg-slate-800 border border-green-300 rounded-sm py-1' type="text" placeholder='make a ui desing' />
                            </div>
                            <div>
                            <h3>Date</h3>
                            <input  className='bg-slate-800 border border-green-300 rounded-sm py-1' type="date" />
                        </div>
                    <div>
                            <h3>employee</h3>
                            <input  className='bg-slate-800 border border-green-300 rounded-sm py-1' type="text" placeholder='employee name' />
                    </div>
                        <div>
                            <h3>category</h3>
                            <input  className='bg-slate-800 border border-green-300 rounded-sm py-1' type="text" placeholder='defsign fecv etc' />
                        </div>
                        
                </div>
                
                 <div className='w-1/2'>   
                    <h3> description</h3>
         <textarea name="" className='bg-slate-800 border border-green-300 rounded-sm py-1' cols="60" rows="10" id=""></textarea>
                </div>
          
            <button className=' border border-red-400 px-4 mt-10 rounded-xl '>
                create task
            </button>
            </form>
        </div>
  )
}

export default CreateTask