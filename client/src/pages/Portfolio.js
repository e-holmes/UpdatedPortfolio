import React, { Component } from "react";
import Buttons from "../components/Buttons";
import Apps from "../components/Apps";
import RPS from "../images/rps.jpeg";
import WG from "../images/wrdGuess.png";
import J from "../images/jeopardy.jpg";
import GT from "../images/Color_Palette.png";


class About extends Component {

    // Handles updating component state when the user types into the input field
  
    render() {
      return (
        <div id="body" className="container">
                {/* <!-- Insert Portfolio Content --> */}
                <section className="row d-flex justify-content-center">
                        
                    <article className="col-lg-8 col-sm-10">
                            {/* <!-- Header --> */}
                            <h1 className="pHead">My Portfolio</h1>

                            {/* <!-- Row 1 --> */}
                            <div className="row d-flex justify-content-center">
                                <Apps id="RPS" image={RPS} alt="ROCK-PAPER-SCISSORS Photo" />
                                <Apps id="WG" image={WG} alt="Word Guess Photo" /> 
                            </div>

                            {/* <!-- Row 2 --> */}
                            <div className="row d-flex justify-content-center">
                                <Apps id="J" image={J} alt="Jeopardy Photo" />
                                <Apps id="GT" image={GT} alt="Place Holder Photo" /> 
                            </div>
                        </article>
                </section>
                
                <section id="intoButton" className="row d-flex justify-content-center">
                    {/* <!-- Store Buttons --> */}
                    <Buttons></Buttons>
                </section>
    
            </div>
      );
    }
  }
  
  export default About;
  