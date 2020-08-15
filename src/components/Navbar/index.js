import React from "react";
import "./style.css";

function Navbar(props){

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Employee Directory</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
   
      <li className="nav-item">
      <span onClick={() => props.sortEmployee(props.name)} className="sort">
        Sort by Name
      </span>
      </li>
    </ul>
  </div>
</nav>
    )
};

export default Navbar; 