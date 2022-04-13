import React from "react";
import imageOne from "./A-knowledge-graph-structure.png";
import "./Home.css";
import { Link } from "react-router-dom";

/**
 * Home-- returns information to be displayed on the home paage of our website
 *        Includes the functionality of a button to bring the user straight to the 'Get started' page 
 */
function Home() {
  return (
    <div className="homepage">
      <div className="hero">
        <h1>
          Hey Knowledge <br /> Graph,
          <br />
          tell me something!
        </h1>
        <Link to="/start">
          <button className="button"> Click To Get Started</button>
        </Link>
      </div>
      <img src={imageOne} className="homeImage" alt="" />
    </div>
  );
}

export default Home;
