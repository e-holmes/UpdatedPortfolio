import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light height">
        <div className="col-4 pb-4 float-left">
          <h1>
            {props.title}
          </h1>
        </div>
        <div className="col-4  float-right">
          <p>Email: bethholmes768@gmail.com</p>
          <p>Number: (503) 339-6767</p>
        </div>

        <div className="row justify-content-center">

          <a href="www.linkedin.com/in/elizabeth-holmes-3b4170172" className="col-lg-4 col-sm-4">Linked-In</a>

          <a href="https://github.com/e-holmes" className="col-lg-3 col-sm-4">Github</a>

          <a href="https://docs.google.com/document/d/1vuqQs8EM0NnLULYr0G2Fkm1n1oyo2py5XZhhtQm1mM8/edit?usp=sharing" className="col-lg-3 col-sm-4">Resume</a>

        </div>
    </nav>
  );
}

export default Navbar;
