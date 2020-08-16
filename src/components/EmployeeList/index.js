import React from "react";
import "./style.css";


function EmployeeList(props) {
  return (
    <table className="table">
     
      
        <tr>
          <td>  <strong>Name:</strong> {props.name}</td> 
          <td> <strong>Occupation:</strong>  {props.occupation}</td> 
          <td> <strong>Phone:</strong>  {props.phone}</td> 
          <td> <strong>Email:</strong>  {props.email}</td> 
        </tr>
   
      </table>
  )};

export default EmployeeList;