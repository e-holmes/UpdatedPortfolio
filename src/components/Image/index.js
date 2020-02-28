import React from "react";
import image from "./beth-holmes.jpg"

function Image() {
    return (
        <article className="col-lg-4 col-sm-4 col-4">
            <img className="myphoto" src={image} alt="myPhoto"></img>
        </article>
    )
}

export default Image