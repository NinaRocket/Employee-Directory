// import React from "react";
// import "./style.css";
// //import Hero from "../Hero";

// function EmployeeList(props) {
//   return (
//     <div className="list-group list-group-horizontal-lg">
     
//       <div className="img-container">
//       </div>
//       {/* <span onClick={() => props.sortEmployee(props.name)} className="sort">
//         Sort by Name
//       </span>  */}
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.name}
//           </li>
//           <li>
//             <strong>Occupation:</strong> {props.occupation}
//           </li>
//           <li>
//             <strong>Phone:</strong> {props.phone}
//           </li>
//           <li>
//             <strong>Email:</strong> {props.email}
//           </li>
//         </ul>
//       </div>

//     </div>
    
//   );
// }

// export default EmployeeList;


import React from "react";
import "./style.css";
//import Hero from "../Hero";

function EmployeeList(props) {
  return (
    <table className="table">
     
      
        <tr>
          <td>  Name: {props.name}</td> 
          <td> Occupation: {props.occupation}</td> 
          <td> Phone: {props.phone}</td> 
          <td> Email: {props.email}</td> 
        </tr>
   
      </table>
  )};

export default EmployeeList;