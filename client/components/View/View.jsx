import React from "react";
import Authenticate from "./Authenticate/Authenticate.jsx";
import App from "./App/App.jsx";
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "Authenticate"
    };
    this.handleViewChange = this.handleViewChange.bind(this);
  }
  handleViewChange(view) {
    this.setState({ show: view });
  }
  render() {
    // console.log(`Render View`, this.props);
    switch (this.state.show) {
      case "App":
        return <App handleViewChange={this.handleViewChange} />;
        break;

      default:
        return <Authenticate handleViewChange={this.handleViewChange} />;
        break;
    }
  }
}
export default View;
