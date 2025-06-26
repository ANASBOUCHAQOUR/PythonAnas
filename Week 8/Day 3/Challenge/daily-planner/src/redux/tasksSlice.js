import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDate: {},
  selectedDate: new Date().toISOString().split('T')[0],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    selectDate(state, action) {
      state.selectedDate = action.payload;
    },
    addTask(state, action) {
      const { date, task } = action.payload;
      if (!state.tasksByDate[date]) state.tasksByDate[date] = [];
      state.tasksByDate[date].push(task);
    },
    editTask(state, action) {
      const { date, taskId, updatedTask } = action.payload;
      const tasks = state.tasksByDate[date];
      const index = tasks.findIndex(t => t.id === taskId);
      if (index !== -1) tasks[index] = updatedTask;
    },
    deleteTask(state, action) {
      const { date, taskId } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date].filter(t => t.id !== taskId);
    },
  },
});

export const { selectDate, addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
