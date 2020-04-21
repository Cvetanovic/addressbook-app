import React from "react";

const ContactCard = ({ contact, deleteContact }) => {
  return (
    <div className="contact-card">
      <div className="card">
        <div className="card-profile">
          <img
            src={contact.picture}
            alt={contact.name}
            className="card-img"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <div className="card-info">
          <h5 className="card-title">{contact.name}</h5>
          <div className="card-text">{contact.email}</div>
          <div className="card-text">{contact.phone}</div>
        </div>
        <button
          onClick={() => {
            deleteContact(contact.id);
          }}
          className="btn btn-action"
        >
          Delete contact
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
