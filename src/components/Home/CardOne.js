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
      <div className="arrow" onClick={scrollBtnClick}>
        V
      </div>
    </div>
  );
}

export default CardOne;
