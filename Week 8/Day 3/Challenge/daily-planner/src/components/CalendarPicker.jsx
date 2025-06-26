import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from '../redux/tasksSlice';

export default function CalendarPicker() {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.tasks.selectedDate);

  return (
    <input
      type="date"
      className="p-2 border rounded"
      value={selectedDate}
      onChange={(e) => dispatch(selectDate(e.target.value))}
    />
  );
}
