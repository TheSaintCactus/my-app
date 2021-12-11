import React, { useState, useRef } from 'react';
import { parse } from 'date-fns';
import NewTaskForm from './components/new-task-form/index';
import TaskList from './components/task-list';
import Footer from './components/footer';

const App = function App() {
  const key = useRef(0);

  const id = useRef(0);

  const createItem = (name, min = 0, sec = 0) => {
    const parseTime = parse(`${min}:${sec}`, 'mm:ss', new Date());
    
    key.current += 1;
    id.current += 1;

  
    return {
      name,
      isCompleted: false,
      isEditing: false,
      dateCreated: new Date(),
      key: key.current,
      id: id.current,
      timeLeft: parseTime,
    };
  };

  const [taskArray, setTaskArray] = useState([createItem('hehe'), createItem('hoho'), createItem('haha')]);
  const [filter, setFilter] = useState('All');

  const propToggle = (arr, propName, ItemId) => {
    const idx = arr.findIndex((el) => el.id === ItemId);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  const showEditForm = (ItemId) => {
    setTaskArray(propToggle(taskArray, 'isEditing', ItemId));
  };

  const filteredArray = (items, filterName) => {
    switch (filterName) {
      case 'All':
        return items;
      case 'Active':
        return items.filter((item) => !item.isCompleted);
      case 'Completed':
        return items.filter((item) => item.isCompleted);
      default:
        return items;
    }
  };

  const clearCompleted = () => {
    const active = filteredArray(taskArray, 'Active');
    const newArray = [...active];
    setTaskArray(newArray);
  };

  const addItem = (name, min, sec) => {
    setTaskArray([...taskArray, createItem(name, min, sec)]);
  };

  const editItem = (newName, ItemId) => {
    const idx = taskArray.findIndex((el) => el.id === ItemId);
    const oldItem = taskArray[idx];
    const newItem = { ...oldItem, name: newName, isEditing: !oldItem.isEditing };

    setTaskArray([...taskArray.slice(0, idx), newItem, ...taskArray.slice(idx + 1)]);
  };

  const deleteItem = (ItemId) => {
    const idx = taskArray.findIndex((el) => el.id === ItemId);
    const newArray = [...taskArray.slice(0, idx), ...taskArray.slice(idx + 1)];

    setTaskArray(newArray);
  };

  const onToggleCheckbox = (ItemId) => {
    setTaskArray(propToggle(taskArray, 'isCompleted', ItemId));
  };

  const onFilterChange = (filterName) => {
    setFilter(filterName);
  };

  const filtered = filteredArray(taskArray, filter);
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addItem={addItem} />
      </header>
      <TaskList
        todos={filtered}
        onDeleted={deleteItem}
        onToggleCheckbox={onToggleCheckbox}
        editItem={editItem}
        showEditForm={showEditForm}
      />
      <Footer
        todos={taskArray}
        filter={filter}
        onFilterChange={onFilterChange}
        clearCompleted={clearCompleted}
      />
    </section>
  );
};

export default App;
