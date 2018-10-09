import React, { Component } from 'react';
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@hotmail.com',
        phone: '123-123-2323',
      },
      {
        id: 2,
        name: 'Bob Hall',
        email: 'bh_123@gmail.com',
        phone: '534-354-3454',
      },
      {
        id: 3,
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
        phone: '231-345-7543',
      },
      {
        id: 4,
        name: 'Pat Smith',
        email: 'psmith59@gmail.com',
        phone: '345-244-2425',
      },
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
