import "./search-panel.css";

const SearchPanel = ({ searchValue, changeSearchValue }) => {
   return (
      <input
         value={searchValue}
         onChange={changeSearchValue}
         type="text"
         className="form-control search-input"
         placeholder="Найти сотрудника"
      />
   );
};

export default SearchPanel;
