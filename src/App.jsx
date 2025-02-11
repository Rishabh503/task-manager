import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login" 
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { EmployeeDashboard } from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"

export  const App=()=> {
 const [user, setUser] = useState(null)
 
 const AuthData=useContext(AuthContext)
 console.log(AuthData.employees)

 const handleLogin=(email,password)=>{
      if(email=="admin@example.com" && password=="123"){
        console.log("this is admin");
        setUser("admin")
        return "hi";
      }else if(AuthData && 
        AuthData.employees.find(
        (emp)=>email==emp.email && password==emp.password)
      ){
          console.log("this is one of your emp")
          setUser("employee")
      }
      else{
        console.log("galat admi")
        alert("wrong")
        setUser("")
      }
 }
const tee=useContext(AuthContext);
// console.log(tee)

  return (
    < >
    {!user? <Login handleLogin={handleLogin}/> : <h1 className="text-white">hi</h1>}
    {user=="admin"?<AdminDashboard/> :<EmployeeDashboard/>}
      {/* <Login/>   */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}