import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
const AdminDashbord = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser}/>
      <CreateTask/> 
      <AllTask/>
    </div>
  );
};

export default AdminDashbord;
