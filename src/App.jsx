import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login" 
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { EmployeeDashboard } from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"

export  const App=()=> {
 const [user, setUser] = useState(null)
 const [loggedInUserData, setLoggedInUserData] = useState(null)
//  const [loggedInUserData, setLoggedInUserData] = useState(null)
 
const [userData,SetUserData] = useContext(AuthContext)


//  console.log(AuthData.employees)


useEffect(()=>{
  const loggedInUser=localStorage.getItem('loggedInUser')
  
  if(loggedInUser){
    const userData=JSON.parse(loggedInUser)
    // console.log(loggedInUser)
    // console.log("user logged in hai")
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }
},[])



 const handleLogin=(email,password)=>{
      if(email=="admin@example.com" && password=="123"){
        setUser("admin")
        localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
      }else if(userData ){
          const employee= userData
          .find(
            (emp)=>email==emp.email && password==emp.password
          )
          console.log(employee)
          if(employee){
            setUser("employee");
            setLoggedInUserData(employee)
            console.log(employee)
            localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}))
        }

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
    {user=="admin"?<AdminDashboard changeUser={setUser}/> :(user=="employee")?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:"d"}
      {/* <Login/>   */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}