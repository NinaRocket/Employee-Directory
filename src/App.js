import React, { Component } from "react";
import EmployeeList from "./components/EmployeeList";
import Wrapper from "./components/Wrapper";
//import Title from "./components/Title";
import Hero from "./components/Hero";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employee to the employees json array
  state = {
    employees
  };

  sortEmployee= name => {
    // Filter this.state.employees so they sort in alphabetical order
    const employees = this.state.employees.sort(employees.name);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
    console.log(employees); 
  };

  // Map over this.state.employees and render an employee list item
  render() {
    return (
     <>
      <Hero backgroundImage="https://images.unsplash.com/photo-1573405618423-1e1a86fbe807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
          <h1>Pancakes</h1>
          <h2>Employee Directory</h2>
      </Hero>
     <Wrapper>
        {this.state.employees.map(employees => (
          <EmployeeList
            sortEmployee={this.sortEmployee}
            id={employees.id}
            key={employees.id}
            name={employees.name}
            occupation={employees.occupation}
            phone={employees.phone}
            email={employees.email}
          />
       
        ))}

      </Wrapper>
      </>
    );
  }
}

export default App;

