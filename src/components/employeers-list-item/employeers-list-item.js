import "./employeers-list-item.css";

const EmployeersListItem = ({ name, salary, increase }) => {
  let classNames = "list-group-item d-flex justify-content-between";
  classNames += increase ? " increase" : "";
  return (
    <li className={classNames}>
      <span className="list-group-item-label"> {name}</span>
      <input
        type="text"
        defaultValue={salary + "$"}
        className="list-group-item-input"
      />
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>
        <button className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeersListItem;
