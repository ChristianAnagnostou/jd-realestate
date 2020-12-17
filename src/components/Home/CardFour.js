import React from "react";
// Router
import { Link } from "react-router-dom";

function CardFour() {
  return (
    <div className="card four">
      <div className="image-tiles">
        <div className="tile">
          <Link to="/listings">FIND YOUR HOME</Link>
        </div>
        <div className="tile">
          <Link to="/listings">LATEST EXCLUSIVES</Link>
        </div>
        <div className="tile">
          <Link to="/meet-jd">JD DISCOVERY</Link>
        </div>
        <div className="tile">
          <Link to="/community">EXPLORE THE COMMUNITY</Link>
        </div>
      </div>
    </div>
  );
}

export default CardFour;
