import React from 'react';
import './App.css';
import NavBar from './Components/NavigationBar/NavBar';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Components/websitePages/Home';
import Instructions from './Components/websitePages/Instructions';
import StartQuery from './Components/websitePages/Start';
import About from './Components/websitePages/About';
import Contact from './Components/websitePages/Contact';
import { queryWikidataWithSparql } from "./Wikidata/APIWrapper";
import Button from './Components/Buttons';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    async function fetchData() {
      const res = await queryWikidataWithSparql();
      console.log("RES", res);
    }
    fetchData();
  }, []);
  return (
    <>
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/instructions"  element={<Instructions/>} />
          <Route path="/start"  element={<StartQuery/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/contact"  element={<Contact/>} />
    </Routes>

    </Router>

    </>

  );
}
export default App;
