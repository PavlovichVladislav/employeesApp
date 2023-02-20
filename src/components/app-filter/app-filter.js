import "./app-filter.css";

const AppFilter = ({ activeFilter, changeActiveFilter }) => {
   const btnArray = [
      {
         label: "Все сотрудники",
         filter: "all",
      },
      {
         label: "На повышение",
         filter: "increase",
      },
      {
         label: "З/П больше 1000$",
         filter: "salary",
      },
   ];

   return (
      <div className="btn-group">
         {btnArray.map((btn) => {
            const btnClass =
               btn.filter === activeFilter ? "btn-light" : "btn-outline-light";
            return (
               <button
                  key={btn.filter}
                  type="button"
                  className={`btn ${btnClass}`}
                  onClick={() => changeActiveFilter(btn.filter)}
               >
                  {btn.label}
               </button>
            );
         })}
      </div>
   );
};

export default AppFilter;
