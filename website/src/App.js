import React from "react";
import "./App.css";
import NavBar from "./Components/NavigationBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/websitePages/Home";
import StartQuery from "./Components/websitePages/Start";
import About from "./Components/websitePages/About";
import Contact from "./Components/websitePages/Contact";


/**
 * App -- This returns all pages of our website so that it can be displayed when our app is launched.
 * */

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/start" element={<StartQuery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/start" element={<Home.Button />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
