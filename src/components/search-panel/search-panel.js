import { Component } from "react";
import "./search-panel.css";
class SerchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  onUpdateProps = (e) => {
    const term = e.target.value;
    this.setState({
      term,
    });
    this.props.onUpdateProps(term);
  };
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        onChange={this.onUpdateProps}
        value={this.state.term}
      />
    );
  }
}

export default SerchPanel;
