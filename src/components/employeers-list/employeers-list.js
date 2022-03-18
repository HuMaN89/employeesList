import EmployeersListItems from "../employeers-list-item/employeers-list-item";
import "./employeers-list.css";
const EmployeersList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeersListItems />
      <EmployeersListItems />
      <EmployeersListItems />
    </ul>
  );
};

export default EmployeersList;
