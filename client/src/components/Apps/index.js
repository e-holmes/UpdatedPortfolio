import React from "react";


function Apps(props) {
return(
    <div className="col-lg-6 col-sm-6 col-xs-12">
        {/* <!-- Rock Paper Scissors --> */}
        <img className="pic1" id={props.id}  src={props.image} alt={props.alt} />
    </div>
)
}

export default Apps