import React from "react";

import profileImage from "../../img/profile-image.jpeg";

function CardFive() {
  return (
    <div className="cardfive">
      <div className="description">
        <h1>Reviews of Our Core Values</h1>
        <p>
          "I cannot imagine meeting a more experienced, intuitive, friendly, hard working, and well
          connected agent. She knows the market inside and out. Her intuition about pricing and
          timing were spot on. She is a very sharp businessperson and her intuition and negotiating
          skills are consummate."
        </p>
        <p>- Elliot K.</p>
      </div>
      <div className="info-container">
        <img src={profileImage} alt="" />
        <div className="info">
          <h4>JD Anagnostou</h4>
          <h5>650.704.5134</h5>
          <h5>jdsoldit@pacbell.net</h5>
          <h5>jdAnagnostou.com</h5>
          <h6>DRE 00900237</h6>
        </div>
      </div>
    </div>
  );
}

export default CardFive;
