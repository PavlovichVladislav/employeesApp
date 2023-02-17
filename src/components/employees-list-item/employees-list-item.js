import "./employees-list-item.css";

const EmployeesListItem = ({ employee, onIncrease, onToggleProp }) => {
   const { name, surname, salary, increase, like } = employee;

   let liClassName = "list-group-item d-flex justify-content-between";
   liClassName = increase ? `${liClassName} increase` : liClassName;
   liClassName = like ? `${liClassName} like` : liClassName;

   return (
      <li className={liClassName}>
         <span onClick={onToggleProp} className="list-group-item-label" data-field="like">
            {name} {surname}
         </span>
         <input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
         <div className="d-flex justify-content-center align-items-center">
            <button
               onClick={onIncrease}
               type="button"
               className="btn-cookie btn-sm"
               data-field="increase"
            >
               <i className="fas fa-cookie"></i>
            </button>

            <button type="button" className="btn-trash btn-sm" onClick={onToggleProp}>
               <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
         </div>
      </li>
   );
};

export default EmployeesListItem;
