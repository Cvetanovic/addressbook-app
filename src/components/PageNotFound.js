import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="error">
      <div className="container">
        <div className="error-content">
          <h2 className="page-title error-title">Sorry</h2>
          <span className="error-text">We couldn't find this page.</span>
          <div className="error-image">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/12/14/19/error-404-1252056__340.png"
              alt="error-img"
            />
          </div>
        </div>

        <div className="button-nav">
          <button className="btn btn-link">
            <Link to="/">Back to Home Page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
