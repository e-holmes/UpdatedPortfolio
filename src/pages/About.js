import React, { Component } from "react";
import Buttons from "../components/Buttons";
import Image from "../components/Image";

class About extends Component {

    // Handles updating component state when the user types into the input field

    render() {
        return (
            <div id="body" className="container">
                <section className="row ">
                    <h1 className="col-lg-4 col-sm-12 col-12">Get to Know Me</h1>

                    <section className="row ">
                        <Image></Image>

                        <article className="col-lg-8 col-sm-10 col-10">
                            <p className="para">
                                I am Elizabeth Holmes and have always had a great interest in computers and coding.  Post High School I attempted to attend college with the goal of getting a degree in computer science. However, I soon discovered that I had no financial support for attending college.
                                <br></br>
                                While learning coding on my own through various sites and apps I discovered the University of Washington had a Full Stack Web Development Bootcamp.  The course was within a manageable price range for me and 6 months later I graduated with a Certificate in Full Stack Web Development.
                                <br></br>
                                During this 6 month Bootcamp we developed a multitude of apps both individually and in a team setting. We worked with HTML, CSS, Javascript, React, Node, JSON, mySQL, Firebase, MongoDB, APIs, and much more. You can see some examples of these skills by viewing my portfolio page.
                                <br></br>
                                Given my current job I have experience working directly with clients, being IT liaison, hiring liaison, communication, and project organization. I am interested in using my certificate to get a job in the web development field and utilizing my previous career experience to bring a unique perspective to my next job. I am very creative about coming up with user friendly features and a fast learner who is quickly able to adapt to new environments.
                                <br></br>
                                Post Bootcamp I am continuing to develop my skills further by working on new projects and revamping old ones.
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