import React from "react";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";
import CardFive from "./CardFive";

function Home() {
  return (
    <div className="cards">
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
    </div>
  );
}

export default Home;
