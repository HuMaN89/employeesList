import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  onUpdateSearch = () => {
    const term = 1000;
    this.setState({
      term,
    });
    this.props.onUpdateSearch(term);
  };
  onResetSearch = () => {
    const term = "";
    this.setState({
      term,
    });
    this.props.onUpdateSearch(term);
  };
  toIncrease = () => {
    const term = "increase";
    this.setState({
      term,
    });
    this.props.onUpdateSearch(term);
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
