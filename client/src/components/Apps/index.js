import React from "react";


function Apps(props) {
return(
    <div className="col-lg-6 col-sm-6 col-xs-12">
        {/* <!-- Rock Paper Scissors --> */}
        <img className="pic1" id={props.id}  src={props.image} alt={props.alt} />
        <h3>{props.title}</h3>
        <p>
            {props.sum}
        </p>
        <div className="row justify-content-center">
        <a href={props.repo}> Github Repo </a> 
        <p className="ml-3 mr-3"> | </p>
        <a href={props.dep}> Deployed Page </a>
        </div>
    </div>
)
}

export default Apps