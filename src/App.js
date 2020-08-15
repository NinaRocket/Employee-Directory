import React, { Component } from "react";
import EmployeeList from "./components/EmployeeList";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employee from "./employee.json";

class App extends Component {
  // Setting this.state.employee to the employees json array
  state = {
    employee
  };

  sortEmployee= name => {
    // Filter this.state.employees so they sort in alphabetical order
    const employees = this.state.employees.sort(employee.name);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  // Map over this.state.employees and render an employee list item
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
          <EmployeeList
            sortEmployee={this.sortEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            phone={employee.phone}
            email={employee.email}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

