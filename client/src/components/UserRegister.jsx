import React, { Component } from "react";
import api from "../api/api";

class Create extends Component {
  state = { name: "", email: "", password: "" };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleCreate = async () => {
    const newItem = this.state;
    //await api.post("", newItem);
    //this.props.getfunc();
    console.log(newItem);
    await api.post("/users", newItem);
  };
  render() {
    return (
      <div className="create-container">
        <input
          onChange={this.handleOnChange}
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          onChange={this.handleOnChange}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          onChange={this.handleOnChange}
          type="text"
          name="password"
          placeholder="password"
        />
        <button className="create-btn" onClick={this.handleCreate}>
          register new user
        </button>
      </div>
    );
  }
}
export default Create;
