import React from "react";
import "./style.css";

function EmployeeList(props) {
  return (
    <div className="list-group list-group-horizontal-lg">
      <div className="img-container">
      </div>
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
      {/* <span onClick={() => props.sortEmployee(props.id)} className="sort">
        Sort by Name
      </span> */}
    </div>
    
  );
}

export default EmployeeList;



// <ul class="list-group list-group-horizontal-lg">
//   <li class="list-group-item">Cras justo odio</li>
//   <li class="list-group-item">Dapibus ac facilisis in</li>
//   <li class="list-group-item">Morbi leo risus</li>
//   <li class="list-group-item">Morbi leo risus</li>
// </ul>