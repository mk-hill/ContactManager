import React, { Component } from 'react';

export class Test extends Component {
  state = {
    name: '',
    email: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/2')
      .then(response => response.json())
      .then(jsonData =>
        this.setState({
          name: jsonData.name,
          email: jsonData.email,
        })
      );
  }
  // Being deprecated?
  // componentWillMount() {
  //   console.log('componentWillMount!');
  // }

  // componentDidUpdate() {
  //   console.log('componendDidUpdate!!');
  // }
  // Being deprecated?
  // componentWillUpdate() {
  //   console.log('componentWillUpdate!');
  // }

  // Being deprecated?
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps:', nextProps, nextState);
  // }

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <h1 className="display-4">Test Component</h1>
        <p>Getting data from JSONplaceholder</p>
        <p>name: {name}</p>
        <p>email: {email}</p>
      </div>
    );
  }
}

export default Test;
