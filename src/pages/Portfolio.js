import React, { Component } from "react";
import Buttons from "../components/Buttons";
import Apps from "../components/Apps";
import YDT from "../images/YDT.png";
import SFM from "../images/SFM.png";
import CC from "../images/CC.png";
import WG from "../images/WG.png";
import CG from "../images/CG.png";
import G from "../images/G.png"
import J from "../images/J.png";



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
                            <Apps
                                id="YDT"
                                image={YDT}
                                alt="Your Day Today Photo"
                                title="Your Day Today!"
                                sum="An app to help you organize your life in one convient place."
                                repo="https://github.com/e-holmes/Your-Day-Today.git"
                                dep="https://e-holmes.github.io/Your-Day-Today/"
                            />
                            <Apps
                                id="SFM"
                                image={SFM}
                                alt="Spotifind Me Photo"
                                title="Spotifind Me"
                                sum="An app to help you expand your musical tastes."
                                repo="https://github.com/e-holmes/Spotifind-Me.git"
                                dep=" https://immense-caverns-47364.herokuapp.com/"
                            />
                        </div>
                        {/* Row 2 */}
                        <div className="row d-flex justify-content-center">
                            <Apps
                                id="CC"
                                image={CC}
                                alt="Cheap Cheep Photo"
                                title="Cheap Cheep"
                                sum="An app to help make online shopping easier."
                                repo="https://github.com/rayhe921/Cheap-Cheep.git"
                                dep="https://limitless-depths-91026.herokuapp.com/"
                            />
                            <Apps
                                id="CG"
                                image={CG}
                                alt="Crystal Game Photo"
                                title="Crystal Collector Game"
                                sum="A fun math and memory game!"
                                repo="https://github.com/e-holmes/Crystal_Collector_Game.git"
                                dep="https://e-holmes.github.io/Crystal_Collector_Game/"
                            />
                        </div>

                        {/* <!-- Row 3 --> */}
                        <div className="row d-flex justify-content-center">
                            <Apps
                                id="J"
                                image={J}
                                alt="Jeopardy Photo"
                                title="Jeopardy"
                                sum="A jeopardy app that can be used in online classes for students and teachers to simultaneously manipulate and view."
                                repo="https://github.com/e-holmes/jeopardy.git"
                                dep="https://e-holmes.github.io/jeopardy/"
                            />
                            <Apps
                                id="WG"
                                image={WG}
                                alt="Word Guess Photo"
                                title="Harry Potter : Word Guess"
                                sum="A fun Harry Potter themed game where you guess words."
                                repo="https://github.com/e-holmes/WordGuessGame.git"
                                dep="https://e-holmes.github.io/WordGuessGame/"
                            />
                        </div>

                        {/* <!-- Row 4 --> */}
                        <div className="row d-flex justify-content-center">
                            <Apps
                                id="G"
                                image={G}
                                alt="Giphy Photo"
                                title="Giphy"
                                sum="An app for finding the giphs you never knew you needed."
                                repo="https://github.com/e-holmes/GifTastic.git"
                                dep="https://e-holmes.github.io/GifTastic/"
                            />
                            {/* <Apps 
                            id="WG" 
                            image={WG} 
                            alt="Word Guess Photo" 
                            title="Harry Potter : Word Guess" 
                            /> */}
                        </div>
                    </article>
                </section>

                <section id="intoButton" >
                    {/* <!-- Store Buttons --> */}
                    <Buttons></Buttons>
                </section>

            </div>
        );
    }
}

export default About;
