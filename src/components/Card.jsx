import React from "react";

function Card () {
    return (
<div className="card mx-1" style={{width: "40rem"}}>
  <img src="https://picsum.photos/id/237/500/325" className="card-img-top" alt="..."/>
  <div className="card-body d-flex justify-content-center align-items-center">
  <div className="text-center">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
    )
};

export default Card;