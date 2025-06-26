import CalendarPicker from './components/CalendarPicker';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';

export default function App() {
  return (
    <Provider store={store}>
      <div className="max-w-xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">🗓️ Daily Planner</h1>
        <CalendarPicker />
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
}
