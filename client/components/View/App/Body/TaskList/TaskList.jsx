import React from "react";
import Task from "./Task.jsx";
import { SSL_OP_PKCS1_CHECK_1 } from "constants";
class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render TaskList`, this.props);
    return (
      <div style={{ margin: "0px", padding: "0px" }}>
        <hr />
        {this.props.tasks.length ? (
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
                if (task.status === "pending") {
                  return (
                    <Task
                      task={task}
                      markTaskComplete={this.props.markTaskComplete}
                      markTaskCancelled={this.props.markTaskCancelled}
                    />
                  );
                }
              })}
            </tbody>
          </table>
        ) : (
          <h1 className="text-center">You done fam!</h1>
        )}
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
        <hr />
        <div className="container">
          <h5>Progress:</h5>
          <br />
          <div className="progress" style={{ margin: "0px", padding: "0px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${this.props.progress}%`,
                margin: "0px",
                padding: "0px"
              }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
export default TaskList;
