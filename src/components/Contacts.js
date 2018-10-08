import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  // Don't need constructor for just state
  // constructor() {
  //   super();
  //   this.state = {
  //   };
  // }

  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@hotmail.com',
        phone: '123-123-2323'
      },
      {
        id: 2,
        name: 'Bob Hall',
        email: 'bh_123@gmail.com',
        phone: '534-354-3454'
      },
      {
        id: 3,
        name: 'Jane Doe',
        email: 'janedoe@gmail.com',
        phone: '231-345-7543'
      },
      {
        id: 4,
        name: 'Pat Smith',
        email: 'psmith59@gmail.com',
        phone: '345-244-2425'
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      // Fragment allows removing unnecessary parent elem from dom
      // (div in this case)
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;