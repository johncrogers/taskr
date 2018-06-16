import React from "react";
class TaskEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render TaskEditor`, this.props);
    return (
      <div>
        {/* TaskEditor */}
        <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          TaskEditor State
        </button>
        <button
          onClick={() => {
            console.log(this.props);
          }}
        >
          TaskEditor Props
        </button>
      </div>
    );
  }
}
export default TaskEditor;
