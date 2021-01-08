import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Task Inbox", state: "TASK_INBOX" },
  { id: "2", title: "Task Archived", state: "TASK_ARCHIVED" },
  { id: "3", title: "Task Pinned", state: "TASK_PINNED" },
  { id: "4", title: "Task Inbox", state: "TASK_INBOX" },
];

const taskSlice = createSlice({
  name: "taskReducer",
  initialState: initialState,
  reducers: {
    pinTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            state: "TASK_PINNED",
          };
        } else {
          return task;
        }
      });
    },
    archiveTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            state: "TASK_ARCHIVED",
          };
        } else {
          return task;
        }
      });
    },

    // We can add more reducer actions here
  },
});

export const { pinTask, archiveTask } = taskSlice.actions;
export default taskSlice.reducer;
