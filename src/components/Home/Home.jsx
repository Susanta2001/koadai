import React from "react";
import Banner from "./Banner";
import Counter from "./Counter";
import AboutHome from "./AboutHome";
import Office from "./Office";
import Offers from "./Offers";
import Packages from "./Packages";

function Home() {
 

  return (
    <div>
      <Banner />
      <Counter/>
      <AboutHome />
      <Offers/>
      <Packages/>
      <Office />
    </div>
  );
}

export default Home;
