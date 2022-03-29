import EmployeersListItem from "../employeers-list-item/employeers-list-item";
import "./employeers-list.css";

const EmployeersList = ({ data, onDelete, onToggleProp, onSalaryChange }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeersListItem
        key={item.id}
        {...itemProps}
        id={item.id}
        onDelete={() => onDelete(id)}
        onSalaryChange={onSalaryChange}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeersList;
