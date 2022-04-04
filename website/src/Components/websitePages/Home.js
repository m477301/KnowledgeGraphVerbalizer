import React from "react";
import imageOne from "./A-knowledge-graph-structure.png";
import "./Home.css";
import { Link } from "react-router-dom";

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
