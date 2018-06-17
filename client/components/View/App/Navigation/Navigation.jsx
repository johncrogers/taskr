import React from "react";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render Navigation`, this.props);
    return (
      // <nav
      //   className="navbar navbar-dark bg-dark"
      //   style={{ margin: "0px", padding: "0px" }}
      // >
      <div>
        <a className="navbar-brand" href="#">
          Taskr
        </a>
        <div
          className="btn-group col text-right"
          role="group"
          aria-label="Actions"
          style={{ marginTop: "5px", marginRight: "5px", padding: "0px" }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.props.handleActionChange("List");
            }}
          >
            List
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.props.handleActionChange("Editor");
            }}
          >
            Editor
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.props.handleViewChange("Authenticate");
            }}
          >
            Log Out
          </button>
          {/* <div className="navbar-nav" /> */}
        </div>
        {/* <button
          onClick={() => {
            this.props.handleActionChange("Editor");
          }}
        >
          Editor
        </button>
        <button
          onClick={() => {
            this.props.handleActionChange("List");
          }}
        >
          List
        </button>
        <button
          onClick={() => {
            this.props.handleViewChange("Authenticate");
          }}
        >
          Log Out
        </button> */}
        {/* <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          Navigation State
        </button>
        <button
          onClick={() => {
            console.log(this.props);
          }}
        >
          Navigation Props
        </button> */}
      </div>
    );
  }
}
export default Navigation;
