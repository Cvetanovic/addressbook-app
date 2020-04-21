import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

class ContactList extends Component {
  render() {
    let list = this.props.contacts.map((contact, index) => (
      <ContactCard
        contact={contact}
        key={index}
        deleteContact={this.props.deleteContact}
      />
    ));
    return (
      <div className="contact-list">
        <div className="container">
          <h2 className="page-title">Contact list</h2>
          <div className="list">{list}</div>
          <div className="page-nav">
            <button className="btn btn-link">
              <Link to="/">Back to Home Page</Link>
            </button>
            <button className="btn btn-link">
              <Link to="/create-contact">Create contact</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactList;
