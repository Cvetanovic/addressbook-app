import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="home-content">
          <h1 className="home-title">Welcome to Address-book Application</h1>
          <img
            src="https://cdn.pixabay.com/photo/2015/03/20/15/04/time-682333__340.png"
            alt="address-book"
          />
        </div>
        <div className="page-nav">
          <button className="btn btn-link">
            <Link to="/create-contact">Create new contact</Link>
          </button>
          <button className="btn btn-link">
            <Link to="/view-contacts">View all contacts</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
