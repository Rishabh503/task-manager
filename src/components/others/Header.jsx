import React, { useState } from 'react'

const Header = (props) => {
  // const [username , setuSerName]=useState("")
  // if(!data) setuSerName("admin")
  //   else setuSerName(data.first_name)
  // console.log("header ka dat:",data)
  console.log(props)
  const handleLogout=()=>{
    localStorage.setItem('loggedInUser','');
    // window.location.reload()
    props.changeUser('')

  }
  return (
    
    <div className='flex items-center text-white p-10 justify-between'>
        <p>
        Hello
        {/* <br /> */}
        <br />
        <span className='text-3xl font-medium '>

         {/* {props.data.first_name}🏆 */}
         username
        </span>
        </p>

        <button onClick={()=>handleLogout()} className='bg-red-500 font-medium px-3 py-4 rounded-xl'>
            LoggOut
        </button>
    </div>
  )
}

export default Header