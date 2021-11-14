import React, { Component } from "react";
import NewTaskForm from "./components/new-task-form/index";
import TaskList from "./components/task-list";
import Footer from "./components/footer";


export default class App extends Component {
  id = 0;
  key = 0;

  state = {
    taskArray: [
      this.createItem("hehe"),
      this.createItem("hoho"),
      this.createItem("haha"),
    ],
    filter: 'all'
  };

  propToggle(arr, propName, id) {
      const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = { ...oldItem, 
        [propName]: !oldItem[propName]};

      return [
          ...arr.slice(0, idx),
          newItem,
          ...arr.slice(idx + 1),
        ]
  }

  showEditForm = (id) => {
    this.setState(({ taskArray }) => {
    return {
      taskArray: this.propToggle(taskArray, 'isEditing', id)
    }
    });
  }

  createItem(name) {
    return {
      name,
      isCompleted: false,
      isEditing: false,
      dateCreated: new Date(),
      key: this.key++,
      id: this.id++,
    };
  }

  addItem = (name) => {
    this.setState(({ taskArray }) => {
      return {
        taskArray: [...taskArray, this.createItem(name)],
      };
    });
  };

  editItem = (newName, id) => {
    this.setState(({ taskArray }) => {
      const idx = taskArray.findIndex((el) => el.id === id);
      const oldItem = taskArray[idx];
      const newItem = { ...oldItem, name: newName, isEditing: !oldItem.isEditing };

      return {
        taskArray: [
          ...taskArray.slice(0, idx),
          newItem,
          ...taskArray.slice(idx + 1),
        ],
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ taskArray }) => {
      const idx = taskArray.findIndex((el) => el.id === id);
      const newArray = [
        ...taskArray.slice(0, idx),
        ...taskArray.slice(idx + 1),
      ];
      return {
        taskArray: newArray,
      };
    });
  };


  onToggleCheckbox = (id) => {
    this.setState(({ taskArray }) => {
      return {
        taskArray: this.propToggle(taskArray, 'isCompleted', id)
      }
      });
  };

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  filter(items, filter) {

      switch(filter) {
        case 'All':
          return items;
        case 'Active':
          return items.filter((item) => !item.isCompleted)
        case 'Completed':
          return items.filter((item) => item.isCompleted)
        default:
          return items;
      }

  }

  clearCompleted = () => {
    this.setState(({ taskArray }) => {
     const active = this.filter(taskArray, 'Active')
      const newArray = [
        ...active
      ];
      return {
        taskArray: newArray,
      };
    });
  };


  render() {
  
    const filtered = this.filter(this.state.taskArray, this.state.filter)

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addItem={this.addItem} />
          <TaskList
            todos={filtered}
            onDeleted={this.deleteItem}
            onToggleCheckbox={this.onToggleCheckbox}
            editItem={this.editItem}
            showEditForm={this.showEditForm}
          />
          <Footer todos={this.state.taskArray}
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
          clearCompleted={this.clearCompleted}/>
        </header>
      </section>
    );
  }
}
