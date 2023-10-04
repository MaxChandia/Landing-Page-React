import React from "react";

function Jumbotron () {
    return(
      <div className="jumbotron bg-light" style={{height: "250px"}}>
      <h1 className="mx-4 display-4">A Warm Welcome!</h1>
      <p className="lead mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id hendrerit ligula. Fusce ipsum lectus, lobortis dictum quam at, tincidunt efficitur nunc.</p>
      <a className="btn btn-primary btn-lg mx-4" href="#" role="button">Call to action</a>
    </div>
    );
}

export default Jumbotron;