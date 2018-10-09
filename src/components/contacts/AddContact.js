import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

class AddContact extends Component {
  /* eslint-disable */
  state = {
    name: '',
    email: '',
    phone: '',
  };

  formChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };

    dispatch({
      type: 'ADD_CONTACT',
      payload: newContact,
    });

    // Clear input fields
    this.setState({
      name: '',
      email: '',
      phone: '',
    });
  };
  /* eslint-enable */

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.formSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter name"
                      value={name}
                      onChange={this.formChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter email address"
                      value={email}
                      onChange={this.formChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={this.formChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
