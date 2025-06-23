import React, { useContext, useRef } from 'react';
import { TaskProvider, TaskContext } from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import './App.css';

const TaskInput = () => {
  const inputRef = useRef();
  const { dispatch } = useContext(TaskContext);

  const handleAdd = () => {
    const text = inputRef.current.value.trim();
    if (text) {
      dispatch({ type: 'ADD_TASK', payload: text });
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Add new task" />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

const App = () => {
  return (
    <TaskProvider>
      <div className="App">
        <h2>📝 Enhanced Task Manager</h2>
        <TaskInput />
        <TaskFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
