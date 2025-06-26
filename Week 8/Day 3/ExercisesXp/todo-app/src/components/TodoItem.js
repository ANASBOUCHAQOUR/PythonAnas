import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow">
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="text-red-500 font-bold"
      >
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
