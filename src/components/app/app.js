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
               like: true,
            },
         ],
         searchValue: "",
         activeFilter: "all",
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

   changeSearchValue = (searchValue) => {
      this.setState({ searchValue });
   };

   changeActiveFilter = (activeFilter) => {
      this.setState({ activeFilter });
   };

   searchEmployees = (employees, term) => {
      if (!employees.length) return employees;

      return employees.filter((employee) => {
         const fullName = `${employee.name} ${employee.surname}`;
         return fullName.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
   };

   filterEmployees = (employees, activeFilter) => {
      switch (activeFilter) {
         case "increase": {
            return employees.filter((employee) => employee.increase);
         }
         case "salary": {
            return employees.filter((employee) => employee.salary > 1000);
         }
         default: {
            return employees;
         }
      }
   };

   render() {
      const { employees, searchValue, activeFilter } = this.state;

      const totalEmployees = employees.length;
      const increaseEmployees = employees.filter((employee) => employee.increase).length;

      let filteredEmployees = this.searchEmployees(employees, searchValue);
      filteredEmployees = this.filterEmployees(filteredEmployees, this.state.activeFilter);

      return (
         <div className="app">
            <AppInfo totalEmployees={totalEmployees} increaseEmployees={increaseEmployees} />

            <div className="search-panel">
               <SearchPanel searchValue={searchValue} changeSearchValue={this.changeSearchValue} />
               <AppFilter
                  changeActiveFilter={this.changeActiveFilter}
                  activeFilter={activeFilter}
               />
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
