import React from "react";
import userTaskData from "./mockData.js";
import TaskList from "./TaskList/TaskList.jsx";
import TaskEditor from "./TaskEditor/TaskEditor.jsx";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commitments: userTaskData.commitments,
      tasks: userTaskData.tasks
    };
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
            tasks={this.state.tasks}
            commitments={this.state.commitments}
          />
        );
        break;
      default:
        return (
          <TaskList
            tasks={this.state.tasks}
            commitments={this.state.commitments}
          />
        );
        break;
    }
  }
}
export default Body;
