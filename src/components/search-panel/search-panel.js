import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         term: props.searchValue,
      };
   }

   onUpdateSearchValue = (e) => {
      const term = e.currentTarget.value;
      this.setState({ term });
      this.props.changeSearchValue(term);
   };

   render() {
      const { term } = this.state;
      return (
         <input
            value={term}
            onChange={this.onUpdateSearchValue}
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
         />
      );
   }
}

export default SearchPanel;
