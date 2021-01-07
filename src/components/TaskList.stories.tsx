import React from "react";
import TaskList, { PureTaskList } from "./TaskList";
import { Story } from "@storybook/react/types-6-0";
import { TaskListProps } from "./TaskList";

export default {
  title: "TaskList",
  component: PureTaskList,
  decorators: [
    (story: () => React.ReactNode) => (
      <div style={{ padding: "3rem" }}>{story()}</div>
    ),
  ],
};

const Template: Story<TaskListProps> = (args) => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { id: "1", title: "Task 1", state: "TASK_INBOX" },
    { id: "2", title: "Task 2", state: "TASK_INBOX" },
    { id: "3", title: "Task 3", state: "TASK_INBOX" },
    { id: "4", title: "Task 4", state: "TASK_INBOX" },
    { id: "5", title: "Task 5", state: "TASK_INBOX" },
    { id: "6", title: "Task 6", state: "TASK_INBOX" },
  ],
};

export const WithPinnedTask = Template.bind({});
WithPinnedTask.args = {
  tasks: [
    { id: "1", title: "Task 1", state: "TASK_INBOX" },
    { id: "2", title: "Task 2", state: "TASK_INBOX" },
    { id: "3", title: "Task 3", state: "TASK_INBOX" },
    { id: "4", title: "Task 4", state: "TASK_INBOX" },
    { id: "5", title: "Task 5", state: "TASK_INBOX" },
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  tasks: [],
  loading: false,
};
