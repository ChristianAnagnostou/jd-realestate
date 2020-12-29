import React from "react";

function CardOne({ scrollBtnClick }) {
  return (
    <div className="card one">
      <h1>
        <span id="title-J">J</span>
        <span id="title-D">D</span>
      </h1>
      <h3>Find the One</h3>
      <h3>Built for You</h3>
      <svg width="408" height="408" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle id="circleSVG" stroke-width="4" stroke-miterlimit="0" cx="202" cy="202" r="200" />
        </g>
      </svg>
      <div className="arrow" onClick={scrollBtnClick}>
        V
      </div>
    </div>
  );
}

export default CardOne;
