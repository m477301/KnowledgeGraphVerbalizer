import React from "react";
import "./Contact.css";
import ContactImage from "./Contact Us Image.png";
import emailImage from "./emailImage.png";
import facebookImage from "./facebookImage.png";
import twitterImage from "./twitterImage.jpeg";
import githubImage from "./githubImage.png";

function Contact() {
  return (
    <div>
      <section className="banner">
        <img src={ContactImage} className="bannerImage" alt="" />
        <div className="bannerText">
          <h1>Get in touch</h1>
        </div>
      </section>
      <body className="container">
        <section className="infoSection">
          <img src={twitterImage} className="icons" alt="" />
          TCD Adapt on Twitter: @AdaptCentre
        </section>

        <section className="infoSection">
          <img src={facebookImage} className="icons" alt="" />
          TCD Adapt on Facebook: @ADAPTCentre
        </section>

        <section className="infoSection">
          <img src={emailImage} className="icons" alt="" />
          Team Leader: mcguinm4@tcd.ie
        </section>

        <section className="infoSection">
          <img src={githubImage} className="icons" alt="" />
          Checkout our Github:
        </section>
      </body>
    </div>
  );
}

export default Contact;
