import React, { Component } from "react";
import Buttons from "../components/Buttons";

class Contacts extends Component {

    // Handles updating component state when the user types into the input field
  
    render() {
      return (
        <div id="body" className="container-fluid">

                <section className="row justify-content-center">

                    <article className="col-lg-8 col-sm-10 contact-box">

                        <div className="row justify-content-center">

                            <h1 className="col-lg-12 col-sm-5">My Information</h1>

                        </div>

                        <div className="contact-hold">

                            <div className="row justify-content-center">

                                <p className="col-lg-2 col-sm-5">Email: beth.holmes@bannas.com</p>

                                <p className="col-lg-2 col-sm-5">Number: (777) 888-9999</p>

                            </div>

                            <div className="row d-flex justify-content-center">

                                    <a href="www.linkedin.com/in/elizabeth-holmes-3b4170172" className="col-lg-3 col-sm-4">Linked-In</a>

                                    <a href="https://github.com/e-holmes" className="col-lg-3 col-sm-4">Github</a>
                                    
                                    <a href="../assets/downloads/Resume.zip" download className="col-lg-3 col-sm-4">Resume</a>

                            </div>
                        </div>
                    </article>
                </section>  

                    <div id="intoButton" className="row d-flex justify-content-center">
                        {/* <!-- Store Buttons --> */}
                        <Buttons></Buttons>
                    </div>
                
            </div>
      );
    }
  }
  
  export default Contacts;
  