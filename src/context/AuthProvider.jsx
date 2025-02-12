import React, { Children, createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext=createContext()
  // localStorage.clear()
const AuthProvider = ({children}) => {
    // console.log(getLocalStorage());

    setLocalStorage()
    const [userData,setUserData]=useState([])
   useEffect(()=>{
    const {employees,admin}=getLocalStorage()
    setUserData({employees,admin});
   }
    ,[])
  return (
    <div>
        <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider