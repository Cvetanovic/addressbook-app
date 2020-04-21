import React, { Component } from "react";
import { Link } from "react-router-dom";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    picture: "",
    nameError: "",
    emailError: "",
    phoneError: "",
  };

  // handleChange function
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Validate form function
  validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError = "";

    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }

    if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      emailError = "Not a valid email";
    }

    if (!this.state.phone.match(/^\d{10,12}$/)) {
      phoneError = "Not a valid phone";
    }

    if (emailError || nameError || phoneError) {
      this.setState({ emailError, nameError, phoneError });
      return false;
    }

    return true;
  };

  //handleSubmit function
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      let { name, email, phone, picture } = this.state;
      let contact = { name, email, phone, picture };
      this.props.addContact(contact);

      this.setState({
        name: "",
        email: "",
        phone: "",
        picture: "",
        nameError: "",
        emailError: "",
        phoneError: "",
      });
    }
  };

  render() {
    return (
      <div className="contact">
        <div className="container">
          <h2 className="page-title">Create new contact</h2>
          <div className="contact-form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-item">
                <div
                  style={{ fontSize: 20, color: "#FF0000", fontWeight: 700 }}
                >
                  {this.state.nameError}
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-item">
                <div
                  style={{ fontSize: 20, color: "#FF0000", fontWeight: 700 }}
                >
                  {this.state.emailError}
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-item">
                <div
                  style={{ fontSize: 20, color: "#FF0000", fontWeight: 700 }}
                >
                  {this.state.phoneError}
                </div>
                <div className="form-item"></div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-item">
                <input
                  type="text"
                  name="picture"
                  placeholder="Picture"
                  value={this.state.picture}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-item">
                <button className="btn btn-action">Add contact</button>
              </div>
            </form>
          </div>
          <div className="page-nav">
            <button className="btn btn-link">
              <Link to="/">Back to Home Page</Link>
            </button>
            <button className="btn btn-link">
              <Link to="/view-contacts">View Contacts</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
