import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="John Doe" email="johndoe@gmail.com" phone="597-685-9768" />
          <Contact name="Jane Doe" email="janedoe@gmail.com" phone="456-546-2345" />
        </div>
      </div>
    );
  }
}

export default App;
