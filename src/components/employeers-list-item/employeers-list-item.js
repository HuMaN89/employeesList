import "./employeers-list-item.css";

const EmployeersListItem = (props) => {
  const {
    id,
    name,
    salary,
    onDelete,
    onToggleProp,
    increase,
    rise,
    onSalaryChange,
  } = props;
  let classNames = "list-group-item d-flex justify-content-between";
  classNames += increase ? " increase" : "";
  classNames += rise ? " like" : "";
  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        data-toggle="rise"
        onClick={onToggleProp}
      >
        {name}
      </span>
      <input
        data-id={id}
        type="text"
        defaultValue={salary + "$"}
        onBlur={(e) => {
          e.target.value = salary + "$";
        }}
        className="list-group-item-input"
        onFocus={(e) => {
          if (e.target.value[e.target.value.length - 1] === "$") {
            e.target.value = e.target.value.slice(0, e.target.value.length - 1);
          }
        }}
        onChange={(e) =>
          onSalaryChange(
            e.currentTarget.getAttribute("data-id"),
            e.target.value
          )
        }
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn-cookie btn-sm"
          data-toggle="increase"
          onClick={onToggleProp}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeersListItem;
