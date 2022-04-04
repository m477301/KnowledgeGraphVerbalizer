import React from "react";
import "react-dropdown/style.css";
import { useState } from "react";
import axios from "axios";
import "./Start.css";
import Speech from "./Speech";

function StartQuery() {
  const [textResults, setTextResults] = useState(
    "Results will be shown here..."
  );
  const [queryInput, setQueryInput] = useState("Ronaldo");

  const showTextResults = async () => {
    setTextResults("Loading...");
    await axios
      .get(`http://localhost:3500/verbalise/${queryInput}`)
      .then((res) => {
        setTextResults(res.data.sentences);
        console.log(res.data);
        // res.data.trouples will give you the trouples
      });
  };

  function handleSelectChange(event) {
    setQueryInput(event.target.value);
  }

  return (
    <div className="StartPage">
      <div className="QueryControl">
        <h2 className="title">Query selected: {queryInput}</h2>
        <select onChange={handleSelectChange} className="SelectComponent">
          <option value="Ronaldo">Cristiano Ronaldo</option>
          <option value="Messi">Lionel Messi</option>
          <option value="Mbappe">Mbappe</option>
          <option value="Haaland">Haaland</option>
          <option value="Bellingham">Bellingham</option>
          <option value="Reus">Reus</option>
          <option value="Malen">Malen</option>
          <option value="Saka">Saka</option>
          <option value="Bony">Bony</option>
        </select>
        <button
          type="button"
          className="resultsButton"
          onClick={() => showTextResults()}
        >
          Click to see Results
        </button>
      </div>
      <div className="paragraphBox">
        <div className="AudioSymbol">
          <Speech paragraph={textResults} />
        </div>
        <p>{textResults}</p>
      </div>
    </div>
  );
}

export default StartQuery;
