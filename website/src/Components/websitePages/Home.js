import React from "react";
import imageOne from "./A-knowledge-graph-structure.png";
import "./Home.css";
import { Link } from "react-router-dom";
import StartQuery from "./Start";

function Home() {
  return (
    <>
      <img src={imageOne} className="homeImage" alt="" />
      <div className="home">
        <section class="hero">
          <h1>
            Hey Knowledge <br /> Graph,
            <br />
            tell me something!
          </h1>
          <Link to="/start">
            <button className="button"> Click To Get Started</button>
          </Link>
        </section>
      </div>
    </>

    /*could possibly add in a button 'Get Started' that 
        will bring you directly to page where select query*/
  );
}

export default Home;
