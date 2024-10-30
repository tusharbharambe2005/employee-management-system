import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashbord from './components/Dashbord/EmployeeDashbord';
import AdminDashbord from './components/Dashbord/AdminDashbord';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext);
  // console.log(authData?.admin); // Using optional chaining to prevent errors

  useEffect(() => {
    const loggedInUser=localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      // console.log(userData)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  },[]);
  

  const handleLogin = (email, password) => {
    if (authData) { 
      // Check for admin login
      if (email=='admin@me.com' && password =='123') {
        setUser('admin');
        localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
      }
      // Check for employee login
      else if (authData) {
        const employee = authData.employees.find((e) => e.Email == email && e.Password == password)
        if (employee) {
          setUser({role:'employee'});  
          setloggedInUserData(employee)
          localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',data:employee}))
        }
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == 'admin' ? (
        <AdminDashbord />
      ) : (
        <EmployeeDashbord data={loggedInUserData}/> 
      )}
    </>
  );
};

export default App;
