import React from "react";
import web from "../src/images/img2.svg";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <h1>hello world</h1>
      <Commom
        name="Grow your Knowledge with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
