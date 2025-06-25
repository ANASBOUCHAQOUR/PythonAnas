import React from 'react';
import DatePicker from './components/DatePicker';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📅 Daily Planner</h1>
      <DatePicker />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
