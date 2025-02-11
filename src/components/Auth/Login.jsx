import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit=(e)=>{
        console.log("check")
        e.preventDefault();
        setEmail("");setPassword("")
    }


  return (

    
    <div className='flex bg-slate-900 min-h-screen w-auto items-center justify-center'>
        <div className='border-2 p-20 border-emerald-400 border-red-500'> 
            <form  onSubmit={(e)=>handleSubmit(e)} className='flex gap-4 flex-col items-center justify-center'>
                <input className=' text-yellow-400 outline-none  placeholder:text-white border-2 border-emerald-500 rounded-xl py-3 px-5 bg-transparent' 
                required type="email" 
                placeholder='email'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />
                <input className=' text-yellow-300 outline-none placeholder:text-white border-2 border-emerald-500 py-3 px-5 rounded-xl bg-transparent'   
                required 
                type="password" 
                placeholder='password'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />
                <button className=' text-black outline-none placeholder:text-white border-2 border-red-500 rounded-full py-3 px-5 bg-transparent'   type='submit' >
                    Login
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login