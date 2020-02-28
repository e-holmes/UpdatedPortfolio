import React, { Component } from "react";
import Buttons from "../components/Buttons";
import Image from "../components/Image";

class About extends Component {

    // Handles updating component state when the user types into the input field

    render() {
        return (
            <div id="body" className="container">
            <section className="row d-flex justify-content-center">
                <h1 className="col-lg-4 col-sm-12 col-12">Get to Know Me</h1>
    
                <section className="row d-flex justify-content-center">
                    <Image></Image>
    
                    <article className="col-lg-8 col-sm-10 col-10">
                        <p className="para">
                            I am Elizabeth Holmes. I am currently 21 years old and am working as an Operations Assistant at
                            Lindamood-Bell
                            Learning Processes. My father was a software engineer and I grew up spending every take your child to work day learning basic coding. I have always had
                            a great interest
                            in computers. Most of my middle school career was used learning many different forms of computer
                            arts. In high
                            school I began learning how to build video games from YouTube videos and discovered my love of
                            coding.<br></br> I decide
                            to begin making a career out of it in 2018 and took my first official computer science class.
                            After discovering
                            that I had no financial support to continue attending college I moved back to Washington and
                            began learning coding
                            on my own through apps.<br></br> Shortly after I discovered a program through University of
                            Washington that would allow me
                            to learn website developement in a short time period and at managable cost. I found myself much
                            more drawn to the
                            assignments that focused less on style and more on logic. I am due to complete the course in
                            Febraury 2020.
                        </p>
                    </article>
                </section>
            </section>
    
            <section id="intoButton">
                {/* <!-- Store Buttons --> */}
                <Buttons></Buttons>
            </section>
    
    
        </div>
        );
    }
}

export default About;