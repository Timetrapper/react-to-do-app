import React, { Component } from "react";
import "./App.css";
import TaskList from "./TasksList";

let shortid = require("shortid");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { tasks: [], value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  createNewTask(text) {
    return {
      id: shortid.generate(),
      text: text
    };
  }

  removeByName(checkboxName) {
    const arr = this.state.tasks;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === checkboxName) {
        arr.splice(i, 1);
      }
    }
    this.setState({ tasks: arr });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = this.state.value;
    // Add the item to the task list (unless it's blank or whitespace):
    if (value.length !== 0 && value.trim().length !== 0) {
      this.state.tasks.push(this.createNewTask(value));
      this.setState({ tasks: this.state.tasks });
    }
    // Clear the task field:
    this.setState({ value: "" });
  }

  handleCheck(e) {
    let checkboxName = e.target.name;
    // Check off the box:
    e.target.checked = true;
    // A little delay added for aesthetic purposes:
    setTimeout(
      function() {
        this.removeByName(checkboxName);
      }.bind(this),
      800
    );
  }

  render() {
    return (
      <div className='App'>
        <h2>
          <u>My To Do List</u>
        </h2>
        <form onSubmit={this.handleSubmit}>
          <label className='lead'>Task:</label>
          <span>   </span>
          <input
            name='addedTask'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <span>   </span>
          <input name='add' className="btn" type='submit' value='Add' />
        </form>
        <br />
        <h3>Current Tasks:</h3>
        <TaskList tasks={this.state.tasks} onChange={this.handleCheck} />
      </div>
    );
  }
}

export default App;
