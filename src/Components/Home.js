import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Detail from "./Detail";
import Footer from "./Footer";
import Header from "./Header";
import Introduction from "./Introduction";
import MyProject from "./MyProject";
import MySkill from "./MySkill";

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Introduction />
              <MySkill />
              <MyProject />
              <Contact />
              <Footer />
            </>
          }
        ></Route>

        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default Home;
