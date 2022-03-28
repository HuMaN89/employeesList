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
        { name: "Иванов И.", salary: 500, increase: false, rise: true, id: 1 },
        {
          name: "Петров П.",
          salary: 1000,
          increase: true,
          rise: false,
          id: 2,
        },
        {
          name: "Сидоров С.",
          salary: 1500,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
      term: "",
      filter: "",
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
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id);
    //   const old = data[index];
    //   const newItem = { ...old, increase: !old.increase };
    //   const newArr = [
    //     ...data.slice(0, index),
    //     newItem,
    //     ...data.slice(index + 1),
    //   ];
    //   return { data: newArr };
    // });
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
    if (term === ">") {
      return items.filter((item) => {
        return item.increase;
      });
    }
    if (term === 1000) {
      return items.filter((item) => {
        return item.salary > 1000;
      });
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { data, term } = this.state;
    const visebleData = this.searchEmp(data, term);
    const employees = visebleData.length;
    const increased = visebleData.filter((item) => item.increase).length;
    return (
      <div className="app">
        <AppInfo count={employees} increased={increased} />
        <div className="search-panel">
          <SerchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onUpdateSearch={this.onUpdateSearch} />
        </div>
        <EmployeersList
          data={visebleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeersAddForm onSubmit={this.addItem} />
      </div>
    );
  }
}

export default App;
