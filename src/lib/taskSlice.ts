import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" },
];

const taskSlice = createSlice({
  name: "taskReducer",
  initialState: initialState,
  reducers: {
    onPinTask: (state, action) => {},
    onArchiveTask: (state, action) => {},

    // more reducer actions to be added here
  },
});

export const { onPinTask, onArchiveTask } = taskSlice.actions;
export default taskSlice.reducer;
