import React, { Component } from "react";
import EmployeeList from "./components/EmployeeList";
import Wrapper from "./components/Wrapper";
//import Title from "./components/Title";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employee to the employees json array
  state = {
    employees
  };


  sortEmployee = () => {
    // Filter this.state.employees so they sort in alphabetical order
    // const employees = this.state.employees.sort(employees.name);
    const employees = this.state.employees.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    // Set this.state.employees equal to the new employees array
     this.setState({ employees });
    // console.log(employees);
    console.log(employees);
  };

  // Map over this.state.employees and render an employee list item
  render() {
    return (
     <>
      <Hero backgroundImage="https://images.unsplash.com/photo-1573405618423-1e1a86fbe807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
          <h1>Pancake</h1>
          <h2>America's Favorite Pancakes</h2>
      </Hero>
      <Navbar sortEmployee={this.sortEmployee}/>
     <Wrapper>
        {this.state.employees.map(employees => (
          <EmployeeList
            
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

