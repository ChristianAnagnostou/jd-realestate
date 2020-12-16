import React from "react";

import profileImage from "../../img/profile-image.jpeg";

function CardTwo() {
  return (
    <div className="card two">
      <img src={profileImage} alt="" />
      <div className="description">
        <h3>John Anagnostou</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, eaque. Assumenda
          molestiae accusamus voluptatem delectus consequuntur maiores odio ullam sit adipisci
          accusantium nisi, aliquid perferendis minima totam dicta voluptate. Commodi, ea! At ullam
          reiciendis perferendis error. Non, sapiente fugit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea dignissimos, enim
          nihil quisquam earum ratione.
        </p>
      </div>
      <div className="awards">
        <div className="award">
          <h3>#1</h3>
          <p>in the US</p>
          <p>per WSJ 2020</p>
        </div>
        <div className="award">
          <h3>#1</h3>
          <p>in Menlo Park</p>
          <p>per WSJ 2020</p>
        </div>
        <div className="award">
          <h3>#1</h3>
          <p>in the Bay Area</p>
          <p>per WSJ 2020</p>
        </div>
      </div>
    </div>
  );
}

export default CardTwo;