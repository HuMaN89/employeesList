import { Component } from "react";
import "./employeers-add-form.css";

class EmployeersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }
  onValueChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, salary } = this.state;
    const { onSubmit } = this.props;
    const itemClass = `form-control new-post-label ${
      name.length < 4 ? " error" : ""
    }`;
    return (
      <div className="app-add-form">
        <h3>Добавте нового сотрудника</h3>
        <form
          className="add-form d-flex"
          onSubmit={(e) => {
            e.preventDefault();
            if (name.length > 3 && salary) {
              onSubmit(this.state.name, this.state.salary);
              this.setState({
                name: "",
                salary: "",
              });
            } else {
              console.log(" Error input ");
            }
          }}
        >
          <input
            type="text"
            className={itemClass}
            placeholder="Введите имя сотрудника"
            name="name"
            value={name}
            onChange={this.onValueChanges}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $"
            name="salary"
            value={salary}
            onChange={this.onValueChanges}
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeersAddForm;
