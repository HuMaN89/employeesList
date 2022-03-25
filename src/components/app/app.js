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
    console.log(prop);
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  // count = ({ data }) => {
  //   let count = 0;
  //   data.forEach((item) => {
  //     count += 1;
  //   });
  //   console.log(count);
  //   return count;
  // };
  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    return (
      <div className="app">
        <AppInfo count={employees} increased={increased} />
        <div className="search-panel">
          <SerchPanel />
          <AppFilter />
        </div>
        <EmployeersList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeersAddForm onSubmit={this.addItem} />
      </div>
    );
  }
}

export default App;
