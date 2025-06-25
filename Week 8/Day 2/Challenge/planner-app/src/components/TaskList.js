import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskList = () => {
  const dispatch = useDispatch();
  const { selectedDate, tasksByDate } = useSelector(state => state);
  const tasks = tasksByDate[selectedDate] || [];

  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState('');

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setNewText(currentText);
  };

  const confirmEdit = (id) => {
    dispatch(editTask(selectedDate, id, newText));
    setEditingId(null);
    setNewText('');
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {editingId === task.id ? (
            <>
              <input
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button onClick={() => confirmEdit(task.id)}>Save</button>
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <button onClick={() => handleEdit(task.id, task.text)}>Edit</button>
              <button onClick={() => dispatch(deleteTask(selectedDate, task.id))}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
