import React from "react";
import "./not_found.css";

const NotFound = () => {
  return (
    <>
      <div className="header">
        <h1>Server Error</h1>
      </div>
      <div id="content">
        <div className="content-container">
          <fieldset>
            <h2>404- File or directory not found.</h2>
            <h3>
              The resource you are looking for might have been removed, had its
              name changed, or is temporarily unavailable.
            </h3>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default NotFound;
