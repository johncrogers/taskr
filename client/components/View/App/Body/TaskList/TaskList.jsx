import React from "react";
import Task from "./Task.jsx";
class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render TaskList`, this.props);
    return (
      <div style={{ margin: "0px", padding: "0px" }}>
        <table className="table table-hover table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map(task => {
              return <Task task={task} />;
            })}
          </tbody>
        </table>
        {/* <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          TaskList State
        </button>
        <button
          onClick={() => {
            console.log(this.props);
          }}
        >
          TaskList Props
        </button> */}
        <div className="container">
          <div className="progress" style={{ margin: "0px", padding: "0px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "35%", margin: "0px", padding: "0px" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default TaskList;
