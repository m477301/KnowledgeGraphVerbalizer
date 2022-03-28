import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import './Start.css';
function StartQuery() {
  const [paragraph, setParagraph] = useState(null);
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
     Fetching Results For Lionel Messi:
    </h2>
        <div className="paragraphBox">
        <p>{paragraph}</p>
    </div>

      </>
    
    );
  }


  return (
    <>
    <h2 className="title">  
     Fetching Results For Lionel Messi:
    </h2>
      <div className="paragraphBox">
          <p>Loading...</p>
      </div>

    </>
    
   
  );
}


export default StartQuery;
