import React from "react";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(`Render Navigation`, this.props);
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Taskr
        </a>
        <div className="navbar-nav">
          <div className="btn-group" role="group" aria-label="Actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                this.props.handleActionChange("List");
              }}
            >
              List
            </button>

            <button
              type="button"
              className="btn btn-secondary"
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
          </div>
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
      </nav>
    );
  }
}
export default Navigation;
