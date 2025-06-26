import { useSelector } from 'react-redux';

export default function TaskList({ onEdit, onDelete }) {
  const { selectedDate, tasksByDate } = useSelector(state => state.tasks);
  const tasks = tasksByDate[selectedDate] || [];

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Tasks for {selectedDate}</h2>
      {tasks.map(task => (
        <div key={task.id} className="flex justify-between p-2 border-b">
          <span>{task.text}</span>
          <div className="space-x-2">
            <button onClick={() => onEdit(task)} className="text-blue-500">Edit</button>
            <button onClick={() => onDelete(task)} className="text-red-500">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
