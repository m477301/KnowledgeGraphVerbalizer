<<<<<<< HEAD
import { useEffect } from "react";
import Header from './Components/Header'
import Button from './Components/Buttons'
import imageOne from './A-knowledge-graph-structure.png'
import { queryWikidataWithSparql } from "./Wikidata/APIWrapper";
=======
import React from 'react';
import './App.css';
import NavBar from './Components/NavigationBar/NavBar';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Components/websitePages/Home';
import StartQuery from './Components/websitePages/Start';
import About from './Components/websitePages/About';
import Contact from './Components/websitePages/Contact';

import Button from './Components/Buttons';

>>>>>>> e473b90 (updated user interface)

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
          <Route path="/start"  element={<StartQuery/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/start" element={<Home.Button/>}/>

      </Routes>
        
      </Router>

    </>
      
      );
    }
   
export default App;

