import React from "react";
import "./style.css";


function Buttons() {
    return (
        <div>
            <a href="/aboutme"><button className="button">About Me</button></a>
            <a href="/portfolio"><button className="button">Portfolio</button></a>
        </div>
    )
}

export default Buttons