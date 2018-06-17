import React from "react";
class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render Task`, this.props);
    return (
      // <div>
      <tr>
        <td scope="row">{this.props.task.title}</td>
        <td>{this.props.task.description}</td>
        <td>
          <div className="btn-group" role="group" aria-label="Actions">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.markTaskComplete(this.props.task.id);
              }}
            >
              &#10003;
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                this.props.markTaskCancelled(this.props.task.id);
              }}
            >
              X
            </button>
          </div>
        </td>
        {/* <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          Task State
        </button>
        <button
          onClick={() => {
            console.log(this.props);
          }}
        >
          Task Props
        </button> */}
      </tr>
      // </div>
    );
  }
}
export default Task;
