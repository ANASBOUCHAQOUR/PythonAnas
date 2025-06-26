import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.tasks.selectedDate);

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addTask({ date: selectedDate, task: { id: nanoid(), text } }));
    setText('');
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        className="p-2 border rounded w-full"
        placeholder="New Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add Task</button>
    </div>
  );
}
