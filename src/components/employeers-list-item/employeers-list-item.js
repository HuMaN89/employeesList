import "./employeers-list-item.css";

const EmployeersListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, increase, rise } = props;
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
        type="text"
        defaultValue={salary + "$"}
        className="list-group-item-input"
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
