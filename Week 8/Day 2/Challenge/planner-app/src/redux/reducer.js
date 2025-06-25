import { SET_SELECTED_DATE, ADD_TASK, EDIT_TASK, DELETE_TASK } from './actions';

const initialState = {
  selectedDate: new Date().toISOString().slice(0, 10), // "YYYY-MM-DD"
  tasksByDate: {}
};

export const plannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload
      };

    case ADD_TASK: {
      const { date, task } = action.payload;
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [date]: [...(state.tasksByDate[date] || []), task]
        }
      };
    }

    case EDIT_TASK: {
      const { date, taskId, newText } = action.payload;
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [date]: state.tasksByDate[date].map(task =>
            task.id === taskId ? { ...task, text: newText } : task
          )
        }
      };
    }

    case DELETE_TASK: {
      const { date, taskId } = action.payload;
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [date]: state.tasksByDate[date].filter(task => task.id !== taskId)
        }
      };
    }

    default:
      return state;
  }
};
