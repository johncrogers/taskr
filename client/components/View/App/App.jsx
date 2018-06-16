import React from "react";
import Navigation from "./Navigation/Navigation.jsx";
import Body from "./Body/Body.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "List"
    };
    this.handleActionChange = this.handleActionChange.bind(this);
  }
  handleActionChange(view) {
    this.setState({ show: view });
  }
  render() {
    // console.log(`Render App`, this.props);
    return (
      <div>
        <Navigation
          handleViewChange={this.props.handleViewChange}
          handleActionChange={this.handleActionChange}
        />
        <Body show={this.state.show} />
        {/* <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          App State
        </button>
        <button
          onClick={() => {
            console.log(this.props);
          }}
        >
          App Props
        </button> */}
      </div>
    );
  }
}
export default App;
