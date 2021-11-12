import React from "react";
import Explore from "../../Shared/Explore/Explore";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Explore showAll={false} />
    </>
  );
};

export default Home;
