import React from "react";
import "./style.css";
//import Hero from "../Hero";

function EmployeeList(props) {
  return (
    <div className="list-group list-group-horizontal-lg">
     
      <div className="img-container">
      </div>
      {/* <span onClick={() => props.sortEmployee(props.name)} className="sort">
        Sort by Name
      </span>  */}
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Phone:</strong> {props.phone}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
        </ul>
      </div>

    </div>
    
  );
}

export default EmployeeList;


// import React from "react";
// import "./style.css";
// //import Hero from "../Hero";

// function EmployeeList(props) {
//   return (
//     <div className="list-group list-group-horizontal-lg">
     
//       <div className="content">
//         <ul class="list-group list-group-horizontal-lg">
//           <li class="list-group-item">  Name: </li> {props.name}
//           <li class="list-group-item"> Occupation: </li> {props.occupation}
//           <li class="list-group-item"> Phone: </li> {props.phone}
//           <li class="list-group-item"> Email: </li> {props.email}
//         </ul>
//       </div>
//       </div>
//   )};

// export default EmployeeList;