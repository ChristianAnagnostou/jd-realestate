import React, { useRef } from "react";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";
import CardFive from "./CardFive";
import ScrollTop from "../ScrollTop";

function Home() {
  const cardTwo = useRef(null);

  const scrollBtnClick = () => {
    cardTwo.current.scrollIntoView();
  };

  return (
    <div className="cards">
      <ScrollTop />
      <CardOne scrollBtnClick={scrollBtnClick} />
      <CardTwo cardTwoRef={cardTwo} />
      <CardThree />
      <CardFour />
      <CardFive />
    </div>
  );
}

export default Home;
