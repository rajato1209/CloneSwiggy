import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    return (
      <div className="userCard">
        <h1>Count:{this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count - 1,
            })
          }
        >
          Decrement
        </button>
        <h1>Count2:{this.state.count2}</h1>
        <h2>Name:{this.props.name}</h2>
        <h2>loaction:{this.props.location}</h2>
        <h2>contact:"rajat@gmail.com"</h2>
      </div>
    );
  }
}

export default UserClass;
