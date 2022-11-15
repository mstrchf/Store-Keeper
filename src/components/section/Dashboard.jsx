
import { BsFillPlusCircleFill } from "react-icons/bs";
import React from "react";

let date = new Date


function Dashboard() {

  return (
    <div>
      <div className="main-top">
        <h1>Dashboard</h1>
        <button >
          <BsFillPlusCircleFill className="main-icon" /> Add
        </button>
      </div>    
    </div>
  );
}   

export default Dashboard;
