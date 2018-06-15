import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(`Render App`, this.props);
    return (
      <div>
        App
        <button
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
        </button>
      </div>
    );
  }
}
export default App;
