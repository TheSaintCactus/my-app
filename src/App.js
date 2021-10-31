import React from 'react';
import NewTaskForm from './components/new-task-form/index';
import TaskList from './components/task-list'
import Footer from './components/footer';

function App() {
  return (
    <section className='todoapp'>
       <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
        <TaskList />
        <Footer />
      </header>
    </section>
  );
}

export default App;
