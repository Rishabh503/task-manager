import js from '@eslint/js'
import { data } from 'autoprefixer'
import React, { act, useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
   const [taskTitle, settaskTitle] = useState("")
   const [Date, setDate] = useState("")
   const [employee, setEmployee] = useState("")
   const [category, setCategory] = useState("")
   const [desc, setDesc] = useState("")
//    const [taskTitle, settaskTitle] = useState("")

const [task, setTask] = useState({})
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("task ban gaya:",
            taskTitle,Date,employee,category,desc
        )
        setTask({
            "title":taskTitle,
            "desc":desc,
            "date":Date,
            "category":category,
            "active":false,
            "new_task":true,
            "completed":false,
            "failed":false
        })
    
        const data=userData
        data.forEach((empl)=>{
            if(empl.first_name==employee){
                    console.log(empl,"hi")
                    console.log(empl.tasks)
            empl.tasks.push(task)
            empl.tasks_count.new_task=empl.tasks_count.new_task+1
                    console.log(empl.tasks)
            // localStorage.setItem('employees',JSON.stringify(data))

            }
        })
        // localStorage.setItem('employees',JSON.stringify(data))
     

    }
  return (
    <div>
            <form onSubmit={(e)=>{handleSubmit(e)}} className='flex border border-red-300 text-white flex-wrap items-start justify-between p-4 ' >
                <div className='w-1/2 flex flex-col gap-5'>
                            <div>
                                <h3>Task title</h3>
                                <input  value={taskTitle}
                                onChange={(e)=>{
                                    settaskTitle(e.target.value)
                                } }
                                 className='bg-slate-800 border border-green-300 rounded-sm py-1' type="text" placeholder='make a ui desing' />
                            </div>
                            <div>
                            <h3>Date</h3>
                            <input value={Date} 
                            onChange={(e)=>{setDate(e.target.value)}}
                             className='bg-slate-800 border border-green-300 rounded-sm py-1' type="date" />
                        </div>
                    <div>
                            <h3>employee</h3>
                            <input
                            value={employee} 
                            onChange={(e)=>{setEmployee(e.target.value)}}
                              className='bg-slate-800 border border-green-300 rounded-sm py-1' type="text" placeholder='employee name' />
                    </div>
                        <div>
                            <h3>category</h3>
                            <input
                            value={category} 
                            onChange={(e)=>{setCategory(e.target.value)}}
                            className='bg-slate-800 border border-green-300 rounded-sm py-1' type="text" placeholder='defsign fecv etc' />
                        </div>
                        
                </div>
                
                 <div className='w-1/2'>   
                    <h3> description</h3>
         <textarea value={desc} 
         onChange={(e)=>{setDesc(e.target.value)}}
         name="" className='bg-slate-800 border border-green-300 rounded-sm py-1' cols="60" rows="10" id=""></textarea>
                </div>
          
            <button className=' border border-red-400 px-4 mt-10 rounded-xl '>
                create task
            </button>
            </form>
        </div>
  )
}

export default CreateTask