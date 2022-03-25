import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      filter: "",
    };
  }
  onUpdateSearch = () => {
    const filter = 1000;
    this.setState({
      filter,
    });
    this.props.onUpdateSearch(filter);
  };
  onResetSearch = () => {
    const filter = "";
    this.setState({
      filter,
    });
    this.props.onUpdateSearch(filter);
  };
  toIncrease = () => {
    const filter = "rise";
    this.setState({
      filter,
    });
    this.props.onUpdateSearch(filter);
  };
  render() {
    return (
      <div className="app-filter">
        <button className="btn btn-light" onClick={this.onResetSearch}>
          Все сотрудники
        </button>
        <button className="btn btn-outline-light" onClick={this.toIncrease}>
          На повышение
        </button>
        <button className="btn btn-outline-light" onClick={this.onUpdateSearch}>
          З/П больше 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
