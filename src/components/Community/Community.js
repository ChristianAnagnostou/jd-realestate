import React from "react";
import map from "../../img/SMCmap.jpg";
function Community() {
  const communities = ["Menlo Park", "Palo Alto", "Redwood City", "Portola Valley", "Woodside"];
  return (
    <div className="CommunityPage">
      <div className="map-container">
        <img useMap="#SMCmap" src={map} alt="SMC Map" />
        <map name="SMCmap">
          <area
            id="millbrae"
            shape="poly"
            coords="113,55,162,15,240,70,173,132"
            href="#"
            aria-label="Millbrae"
          />
          <area
            id="burlingame"
            shape="poly"
            coords="240,70, 290,112, 360,120, 370,123, 310,170, 305,150, 290,140, 250,140, 200,176, 176,135"
            href="#"
            aria-label="Burlingame"
          />
        </map>
      </div>
      {/* <div className="community-list">
        {communities.map((town) => (
          <div key={town}>{town}</div>
        ))}
      </div> */}
    </div>
  );
}

export default Community;
