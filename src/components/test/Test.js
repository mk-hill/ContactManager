import React, { Component } from 'react';

export class Test extends Component {
  componentDidMount() {
    console.log('componentDidMount!');
  }
  // Being deprecated?
  componentWillMount() {
    console.log('componentWillMount!');
  }

  componentDidUpdate() {
    console.log('componendDidUpdate!!');
  }
  // Being deprecated?
  componentWillUpdate() {
    console.log('componentWillUpdate!');
  }
  // Being deprecated?
  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps:', nextProps, nextState);
  }

  render() {
    return (
      <div>
        <h1 className="display-4">Test Component</h1>
      </div>
    );
  }
}

export default Test;
