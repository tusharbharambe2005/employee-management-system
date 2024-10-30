import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashbord from './components/Dashbord/EmployeeDashbord'
import AdminDashbord from './components/Dashbord/AdminDashbord'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  


  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
    }
    else if(authData && authData.employees.find((e)=>email==e.email && e.password == password)){
      setUser('employee')
    }
    else{
      alert("Invalid Credentials")
    }
  }
  

  return (
    <>{/* this are the fragments */}
    {!user? <Login handleLogin={handleLogin}/> :''} 
    {user=='admin'?<AdminDashbord/>:<EmployeeDashbord/>}
    </>
  )
}

export default App