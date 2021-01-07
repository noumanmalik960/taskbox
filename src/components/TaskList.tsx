import React, { FC } from "react";
import Task, { TaskType } from "./Task";
import { pinTask, archiveTask } from "../lib/taskSlice";
import { connect } from "react-redux";

export interface TaskListProps {
  loading: boolean;
  tasks: TaskType[];
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

export const PureTaskList: FC<TaskListProps> = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export default connect(
  ({ tasks }: any) => ({
    tasks: tasks.filter(
      (t: { state: string }) =>
        t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
    ),
  }),
  (dispatch) => ({
    onArchiveTask: (id: string) => dispatch(archiveTask(id)),
    onPinTask: (id: string) => dispatch(pinTask(id)),
  })
)(PureTaskList);
