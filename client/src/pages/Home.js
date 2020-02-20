import React, { Component } from "react";
import Buttons from "../components/Buttons";


class Home extends Component {

    // Handles updating component state when the user types into the input field

    render() {
        return (
            <div id="body" className="container-fluid">
                <section id="intoHeader" className="row d-flex justify-content-center">
                    <h1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">What do you want to see first?</h1>
                </section>
                
                <section id="intoButton" className="row d-flex justify-content-center">
                    {/* <!-- Store Buttons --> */}
                    <Buttons></Buttons>
                </section>

            </div>
        );
    }
}

export default Home;