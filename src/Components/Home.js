import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import Introduction from "./Introduction";
import MyProject from "./MyProject";
import MySkill from "./MySkill";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Introduction />
      <MySkill />
      <MyProject />
    </div>
  );
};

export default Home;
