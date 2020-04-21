import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ContactList from "./components/contacts/ContactList";
import ContactForm from "./components/contacts/ContactForm";
import PageNotFound from "./components/PageNotFound";

class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Alexis Morris",
        gender: "Female",
        email: "alexis.morris@example.com",
        phone: "9459000368",
        picture: "https://randomuser.me/api/portraits/med/women/48.jpg"
      },
      {
        id: 2,
        name: "Curtis Davis",
        gender: "Male",
        email: "curtis.davis@example.com",
        phone: "8963409459",
        picture: "https://randomuser.me/api/portraits/med/men/24.jpg"
      },
      {
        id: 3,
        name: "Paula Campos",
        gender: "Female",
        email: "campos@example.com",
        phone: "8056267810",
        picture: "https://randomuser.me/api/portraits/med/women/32.jpg"
      },
      {
        id: 4,
        name: "Renzo Fleur",
        gender: "Male",
        email: "renzo.fleury@example.com",
        phone: "5224658824",
        picture: "https://randomuser.me/api/portraits/med/men/7.jpg"
      },
      {
        id: 5,
        name: "Silva Pauls",
        gender: "Female",
        email: "silva.pauls@example.com",
        phone: "9877151559",
        picture: "https://randomuser.me/api/portraits/med/women/71.jpg"
      },
      {
        id: 6,
        name: "Marolo Carvalho",
        gender: "Male",
        email: "arolo.carvalho@example.com",
        phone: "5617011238",
        picture: "https://randomuser.me/api/portraits/med/men/47.jpg"
      }
    ]
  };

  // Add contact function
  addContact = contact => {
    let { contacts } = this.state;
    contacts.unshift(contact);
    this.setState({ contacts });
  };

  // Delete contact function
  deleteContact = id => {
    let { contacts } = this.state;
    let index = contacts.findIndex(c => c.id === id);
    if (index !== -1) {
      contacts.splice(index, 1);
      this.setState({ contacts });
    }
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/view-contacts"
            render={() => (
              <ContactList
                contacts={this.state.contacts}
                deleteContact={this.deleteContact}
              />
            )}
          />
          <Route
            path="/create-contact"
            render={({ history }) => (
              <ContactForm addContact={this.addContact} />
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
