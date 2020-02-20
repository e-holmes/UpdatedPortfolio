import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light height">
      <div className="row">
        <h1 className="col-sm-8 text-center navbar-text">
          {props.title}
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
