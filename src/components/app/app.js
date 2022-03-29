import { Component } from "react";

import "./app.css";
import AppFilter from "../app-filter/app-filter";
import SerchPanel from "../search-panel/search-panel";
import AppInfo from "../app-info/app-info";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Иванов И.",
          salary: 500,
          increase: false,
          rise: true,
          id: "1",
        },
        {
          name: "Петров П.",
          salary: 1000,
          increase: true,
          rise: false,
          id: "2",
        },
        {
          name: "Сидоров С.",
          salary: 1500,
          increase: false,
          rise: false,
          id: "3",
        },
      ],
      term: "",
      filter: "all",
    };
    this.maxId = 4;
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  filterEmp = (items, filter) => {
    if (filter === "all") {
      return items;
    }
    if (filter === "rise") {
      return items.filter((item) => {
        return item.rise;
      });
    }
    if (filter === "moreThen1000") {
      return items.filter((item) => {
        return item.salary > 1000;
      });
    }
  };
  onUpdateProps = (prop) => {
    switch (prop) {
      case "moreThen1000":
        this.setState({ filter: "moreThen1000" });
        break;
      case "rise":
        this.setState({ filter: "rise" });
        break;
      case "all":
        this.setState({ filter: "all" });
        break;
      default:
        this.setState({ term: prop });
        break;
    }
  };

  onSalaryChange = (id, newSalary) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          // console.log(item.id);
          console.log({ ...item, salary: newSalary });
          return { ...item, salary: newSalary };
        }
        console.log(item);
        return item;
      }),
    }));
  };
  render() {
    const { data, term, filter } = this.state;
    const visebleData = this.searchEmp(this.filterEmp(data, filter), term);
    const employees = visebleData.length;
    const increased = visebleData.filter((item) => item.increase).length;
    return (
      <div className="app">
        <AppInfo count={employees} increased={increased} />
        <div className="search-panel">
          <SerchPanel onUpdateProps={this.onUpdateProps} />
          <AppFilter onUpdateProps={this.onUpdateProps} filter={filter} />
        </div>
        <EmployeersList
          data={visebleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onSalaryChange={this.onSalaryChange}
        />
        <EmployeersAddForm onSubmit={this.addItem} />
      </div>
    );
  }
}

export default App;
