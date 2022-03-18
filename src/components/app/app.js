import "./app.css";
import AppFilter from "../app-filter/app-filter";
import SerchPanel from "../search-panel/search-panel";
import AppInfo from "../app-info/app-info";

function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SerchPanel />
        <AppFilter />
      </div>
    </div>
  );
}

export default App;
