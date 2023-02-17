import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
import { Component } from "react";

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         employees: [
            {
               id: 1,
               name: "John",
               surname: "Smith",
               salary: 500,
               increase: true,
               like: false,
            },
            {
               id: 2,
               name: "Bob",
               surname: "Norton",
               salary: 2000,
               increase: false,
               like: false,
            },
         ],
         searchValue: "",
      };
   }

   toggleEmployeeProp = (id, prop) => {
      this.setState(({ employees }) => ({
         employees: employees.map((employee) => {
            if (employee.id !== id) return employee;

            return { ...employee, [prop]: !employee[prop] };
         }),
      }));
   };

   deleteEmployee = (id) => {
      this.setState(({ employees }) => ({
         employees: employees.filter((employee) => employee.id !== id),
      }));
   };

   addEmployee = (newEmployee) => {
      this.setState(({ employees }) => ({
         employees: [...employees, newEmployee],
      }));
   };

   changeSearchValue = ({ currentTarget }) => {
      this.setState({
         searchValue: currentTarget.value,
      });
   };

   searchEmployees = (employees, term) => {
      if (!employees.length) return employees;

      return employees.filter(employee => employee.name.includes(term));
   }

   render() {
      const { employees, searchValue } = this.state;

      const totalEmployees = employees.length;
      const increaseEmployees = employees.filter((employee) => employee.increase).length;

      const filteredEmployees = employees.filter(employee => employee.name.includes(searchValue));

      return (
         <div className="app">
            <AppInfo totalEmployees={totalEmployees} increaseEmployees={increaseEmployees} />

            <div className="search-panel">
               <SearchPanel searchValue={searchValue} changeSearchValue={this.changeSearchValue} />
               <AppFilter />
            </div>

            <EmployeesList
               employees={filteredEmployees}
               onToggleEmployeeProp={this.toggleEmployeeProp}
               onDeleteEmployee={this.deleteEmployee}
            />
            <EmployeesAddForm onAddEmployee={this.addEmployee} />
         </div>
      );
   }
}

export default App;
