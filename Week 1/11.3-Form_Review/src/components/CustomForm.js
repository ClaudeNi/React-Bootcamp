import React from "react";

class CustomForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: "--Did not select age--",
    freeText: "",
    disabledOption: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(this.state).forEach((input) => {
      sessionStorage[input] = this.state[input];
    });
    document.querySelector("#survey-form").classList.add("disabled");
    this.disableInputs();
    this.props.callBackParent();
  };

  disableInputs = () => {
    const allInputs = document.querySelectorAll(".form-input");
    allInputs.forEach((inputEl) => {
      inputEl.disabled = true;
    });
  };

  handleChange = (e, type) => {
    switch (type) {
      case "firstName":
        this.setState({ firstName: e.target.value });
        break;
      case "lastName":
        this.setState({ lastName: e.target.value });
        break;
      case "age":
        this.setState({ age: e.target.value, disabledOption: true });
        break;
      case "freeText":
        this.setState({ freeText: e.target.value });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <form id="survey-form" onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input
            className="form-input"
            type={"text"}
            value={this.state.firstName}
            onChange={(e) => this.handleChange(e, "firstName")}
            required
          ></input>
          <label>Last Name:</label>
          <input
            className="form-input"
            type={"text"}
            value={this.state.lastName}
            onChange={(e) => this.handleChange(e, "lastName")}
            required
          ></input>
          <label>Age:</label>
          <select
            className="form-input"
            value={this.state.age}
            onChange={(e) => this.handleChange(e, "age")}
            required
          >
            <option disabled={this.state.disabledOption} value={-1}>
              Select Age
            </option>
            <option>0-18</option>
            <option>19-30</option>
            <option>31-50</option>
            <option>Over 50</option>
          </select>
          <label>Free Text:</label>
          <textarea
            className="form-input"
            value={this.state.freeText}
            onChange={(e) => this.handleChange(e, "freeText")}
          ></textarea>
          <input
            className="form-input"
            type={"submit"}
            value={"Continue"}
          ></input>
        </form>
      </div>
    );
  }
}

export default CustomForm;
