import React from "react";
import Task, { TaskProps } from "./Task";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Task",
  component: Task,
};

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: "2",
    title: "Test Task",
    state: "TASK_PINNED",
  },
};
export const Archived = Template.bind({});
Archived.args = {
  task: {
    id: "3",
    title: "Test Task",
    state: "TASK_ARCHIVED",
  },
};
