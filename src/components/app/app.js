import "./app.css";
import AppFilter from "../app-filter/app-filter";
import SerchPanel from "../search-panel/search-panel";
import AppInfo from "../app-info/app-info";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";

function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SerchPanel />
        <AppFilter />
      </div>
      <EmployeersList />
      <EmployeersAddForm />
    </div>
  );
}

export default App;
