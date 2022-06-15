import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
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
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
