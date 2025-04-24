import React, { Children, createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext=createContext()
  // localStorage.clear()
  const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
  
    useEffect(() => {
      const { employees } = getLocalStorage();
      
      if (!employees || employees.length === 0) {
        localStorage.setItem("employees", JSON.stringify(employees)); // Ensure initial data is saved
      }
      
      setUserData(employees || []); // Set user data from local storage
    }, []);
  
    useEffect(() => {
      if (userData.length > 0) {
        localStorage.setItem("employees", JSON.stringify(userData)); // Save updated data on changes
      }
    }, [userData]); // Watch for userData changes
  
    return (
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;