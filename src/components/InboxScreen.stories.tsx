import React from "react";
import { Provider } from "react-redux";
import { PureInboxScreen } from "./InboxScreen";
import * as TaskListStories from "./TaskList.stories";
import { action } from "@storybook/addon-actions";

export interface ErrorType {
  error: string;
}
// this one is the mock store, we can use our own store here too(store branch)
const mockStore = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args?.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};
export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [
    //@ts-ignore
    //ignoring this because I will implement my own store in the other branch
    (story: any) => <Provider store={mockStore}>{story()}</Provider>,
  ],
};

const Template = (args: ErrorType | any) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
//@ts-ignore
Error.args = {
  error: "Something",
};
