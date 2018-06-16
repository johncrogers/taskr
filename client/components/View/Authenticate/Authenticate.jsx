import React from "react";
class Authenticate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render Authenticate`, this.props);
    return (
      <div>
        <button
          onClick={() => {
            this.props.handleViewChange("App");
          }}
        >
          Authenticate
        </button>
        {/* <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          Authenticate State
        </button>
        <button
          onClick={() => {
            console.log(this.props);
          }}
        >
          Authenticate Props
        </button> */}
      </div>
    );
  }
}
export default Authenticate;
