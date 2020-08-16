import React from "react";
import "./style.css";

function Search (props) {
    return (
        <form className="col-12">
        <div className="form-group col-xs-4">
          <label htmlFor="search"></label>
          <input
            onChange={props.filterOccupation}
            value={props.inputValue}
            name="search"
            type="text"
            className="form-control"
            placeholder="Filter employees by occupation"
            id="search"
            
          />
        </div>
      </form>  
    );
}

export default Search;