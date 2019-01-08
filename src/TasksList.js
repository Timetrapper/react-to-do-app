import React, { Component } from "react";

class TaskList extends Component {
  render() {
    const tasks = this.props.tasks;
    const listTasks = tasks.map(tasks => (
      <li key={tasks.id.toString()}>
        <input
          name={tasks.id.toString()}
          type='checkbox'
          onChange={this.props.onChange}
        />
        <span>   </span>
        {tasks.text}
      </li>
    ));

    return (
      <div className='container'>
        <div className='float-left'>
          <ul className='text-left' style={{ listStyleType: "none" }}>
            {listTasks}
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskList;
