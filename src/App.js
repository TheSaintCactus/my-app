import React, { Component } from "react";
import NewTaskForm from "./components/new-task-form/index";
import TaskList from "./components/task-list";
import Footer from "./components/footer";

export default class App extends Component {
  state = {
    taskArray: [
      { name: "Completed task", className: "completed", key: 1 },
      { name: "Editing task", className: "editing", key: 2 },
      { name: "Active task", className: "active", key: 3 },
    ],
  };

  deleteItem = (key) => {
    this.setState(({ taskArray }) => {
      const idx = taskArray.findIndex((el) => el.key === key)
      const newArray = [...taskArray.slice(0, idx), ...taskArray.slice(idx + 1)];

      return {
        taskArray: newArray
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
          <TaskList
            todos={this.state.taskArray}
            onDeleted={(key) => {
              this.deleteItem(key);
            }}
          />
          <Footer />
        </header>
      </section>
    );
  }
}
