import { Component } from "react";
import "./employees-add-form.css";
import { v4 as uuidv4 } from "uuid";

class EmployeesAddForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         salary: "",
      };
   }

   handleInputChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value,
      });
   };

   onSubmitForm = (e) => {
      e.preventDefault();
      const { name, salary } = this.state;

      if (!name || !salary) return;
      if (name.length < 3) return;

      const employee = {
         name,
         salary,
         increase: false,
         like: false,
         id: uuidv4(),
      };

      this.props.onAddEmployee(employee);

      this.setState({
         name: "",
         salary: ""
      })
   };

   render() {
      const { name, salary } = this.state;

      return (
         <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex" onSubmit={this.onSubmitForm}>
               <input
                  type="text"
                  className="form-control new-post-label"
                  placeholder="Как его зовут?"
                  name="name"
                  value={name}
                  onChange={this.handleInputChange}
               />
               <input
                  type="number"
                  className="form-control new-post-label"
                  placeholder="З/П в $?"
                  name="salary"
                  value={salary}
                  onChange={this.handleInputChange}
               />

               <button type="submit" className="btn btn-outline-light">
                  Добавить
               </button>
            </form>
         </div>
      );
   }
}

export default EmployeesAddForm;
