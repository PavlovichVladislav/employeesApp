import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ employees, onDeleteEmployee, onToggleEmployeeProp }) => {
   const renderEmployeesList = (employeesArr) => {
      return employeesArr.map(({id, ...employee}) => (
         <EmployeesListItem
            key={id}
            employee={employee}
            onIncrease={() => onToggleEmployeeProp(id, 'increase')}
            onLike={() => onToggleEmployeeProp(id, 'like')}
            onDelete={() => onDeleteEmployee(id)}
            onToggleProp={(e) => onToggleEmployeeProp(id, e.currentTarget.getAttribute('data-field'))}
         />
      ));
   };

   return <ul className="app-list list-group">{renderEmployeesList(employees)}</ul>;
};

export default EmployeesList;
