import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskFilter = () => {
  const { dispatch } = useContext(TaskContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>All</button>
      <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}>Active</button>
      <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}>Completed</button>
    </div>
  );
};

export default TaskFilter;
