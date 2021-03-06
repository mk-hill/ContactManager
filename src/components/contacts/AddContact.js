import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
  /* eslint-disable */
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  formChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check for errors
    const nameRe = /^[a-z A-Z]{2,20}$/;
    const emailRe = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-z]{2,5})$/;
    const phoneRe = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    if (!nameRe.test(name)) {
      this.setState({
        errors: {
          name: 'Name must be between 2 and 20 characters.',
        },
      });
      return;
    }
    if (!emailRe.test(email)) {
      this.setState({
        errors: {
          email: 'Enter a valid email address.',
        },
      });
      return;
    }
    if (!phoneRe.test(phone)) {
      this.setState({
        errors: {
          phone: 'Enter a valid phone number.',
        },
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
    };

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );

    dispatch({
      type: 'ADD_CONTACT',
      payload: res.data,
    });

    // Clear input fields and errors
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
    });

    // Redirect to home
    this.props.history.push('/');
  };
  /* eslint-enable */

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.formSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.formChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={this.formChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={this.formChange}
                    error={errors.phone}
                  />
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
