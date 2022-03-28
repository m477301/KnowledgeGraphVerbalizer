import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import './Start.css';
import { FaTruckLoading } from "react-icons/fa";
function StartQuery() {
  const [paragraph, setParagraph] = useState(null);
  const[textResults, setTextResults]=useState("Results will be shown here...");
  

  const showTextResults=(results) => setTextResults(results);
  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:3500/verbalise/Mbappe").then((res) => {
        setParagraph(res.data);
      });
    }
    fetchData();
  }, []);

  if (paragraph) {
    return (
      <>
      <h2 className="title">  
        Query selected: Lionel Messi
    </h2>
    <button type="button" className="resultsButton" onClick={()=>showTextResults(paragraph)}>
      Click to see Results
    </button>
        <div className="paragraphBox">
        <p>{textResults}</p>
    </div>

      </>
    
    );
 }

  return (
      <>
      <h2 className="title">  
        Query selected: Lionel Messi
    </h2>
    <button type="button" className="resultsButton" onClick={()=>showTextResults(paragraph)}>
      Click to see Results
    </button>
        <div className="paragraphBox">
        <p>Loading...</p>
    </div>

      </>
    
    );
  
}


export default StartQuery;
