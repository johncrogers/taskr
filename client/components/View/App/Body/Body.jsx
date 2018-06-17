import React from "react";
import userTaskData from "./mockData.js";
import TaskList from "./TaskList/TaskList.jsx";
import TaskEditor from "./TaskEditor/TaskEditor.jsx";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commitments: [],
      tasks: [],
      pendingTasks: []
    };
    this.loadTasks = this.loadTasks.bind(this);
    this.sortTasks = this.sortTasks.bind(this);
  }
  loadTasks() {
    let commitments = userTaskData.commitments;
    let tasks = userTaskData.tasks;
    this.setState({ commitments: commitments, tasks: tasks });
    let pendingTasks = tasks.filter(task => {
      return task.status === "pending";
    });
    this.sortTasks(pendingTasks, commitments);
  }
  sortTasks(tasks, commitments) {
    let sortedTasks = tasks.sort((a, b) => {
      // console.group(`${a.title} against ${b.title}`);
      // console.log(
      //   `A:${a.title} - ${a.description} [ task priority: ${
      //     a.priority
      //   }, commitment priority: ${commitments[a.commitmentId].priority} ]`,
      //   a.priority / commitments[a.commitmentId].priority
      // );
      // console.log(
      //   `B:${b.title} - ${b.description} [ task priority: ${
      //     b.priority
      //   }, commitment priority: ${commitments[b.commitmentId].priority} ]`,
      //   b.priority / commitments[b.commitmentId].priority
      // );
      // console.log(
      //   `A > B ? ${a.priority / commitments[a.commitmentId].priority >
      //     b.priority / commitments[b.commitmentId].priority}`
      // );
      // console.log(
      //   `A < B ? ${a.priority / commitments[a.commitmentId].priority <
      //     b.priority / commitments[b.commitmentId].priority}`
      // );
      // console.log(
      //   `A === B ? ${a.priority / commitments[a.commitmentId].priority ===
      //     b.priority / commitments[b.commitmentId].priority}`
      // );
      // if (
      //   a.priority / commitments[a.commitmentId].priority ===
      //   b.priority / commitments[b.commitmentId].priority
      // ) {
      //   console.log(
      //     "A < B ? ",
      //     commitments[a.commitmentId].priority <
      //       commitments[b.commitmentId].priority
      //   );
      //   console.log(
      //     "A > B ? ",
      //     commitments[a.commitmentId].priority >
      //       commitments[b.commitmentId].priority
      //   );
      //   console.log(
      //     "A === B ? ",
      //     commitments[a.commitmentId].priority ===
      //       commitments[b.commitmentId].priority
      //   );
      // }
      // console.groupEnd();
      if (
        commitments[a.commitmentId].priority >
        commitments[b.commitmentId].priority
      ) {
        return 1;
      }
      if (
        commitments[a.commitmentId].priority <
        commitments[b.commitmentId].priority
      ) {
        return -1;
      }
      if (
        commitments[a.commitmentId].priority ===
        commitments[b.commitmentId].priority
      ) {
        if (a.priority < b.priority) {
          return -1;
        }
        if (a.priority > b.priority) {
          return 1;
        }
        if (a.priority === b.priority) {
          return 0;
        }
      }
    });
    this.setState({ pendingTasks: sortedTasks });
  }
  markTaskComplete() {}
  markTaskCancelled() {}
  componentDidMount() {
    this.loadTasks();
  }
  render() {
    // console.log(`Render Body`, this.props, this.state);
    // console.log(`userData: `, userTaskData);
    switch (this.props.show) {
      case "Editor":
        return (
          <TaskEditor
            tasks={this.state.tasks}
            commitments={this.state.commitments}
          />
        );
        break;
      case "List":
        return (
          <TaskList
            tasks={this.state.pendingTasks}
            commitments={this.state.commitments}
          />
        );
        break;
      default:
        return (
          <TaskList
            tasks={this.state.pendingTasks}
            commitments={this.state.commitments}
          />
        );
        break;
    }
  }
}
export default Body;
