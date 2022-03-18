import "./app.css";
import AppFilter from "../app-filter/app-filter";
import SerchPanel from "../search-panel/search-panel";
import AppInfo from "../app-info/app-info";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";

function App() {
  const data = [
    { name: "Иванов Иван", salary: 500, increase: true },
    { name: "Петров Петр", salary: 1000, increase: false },
    { name: "Сидоров Сидор", salary: 15000, increase: false },
  ];
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SerchPanel />
        <AppFilter />
      </div>
      <EmployeersList data={data} />
      <EmployeersAddForm />
    </div>
  );
}

export default App;
