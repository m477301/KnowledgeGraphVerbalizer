import React from "react";
import "react-dropdown/style.css";
import { useState } from "react";
import axios from "axios";
import "./Start.css";
import Speech from "./Speech";
import Grid from "./Grid";

function StartQuery() {
  const [textResults, setTextResults] = useState(
    "Results will be shown here..."
  );
  const [queryInput, setQueryInput] = useState("Ronaldo");
  const [gridInput, setGridInput] = useState([
    { Subject: "None", Predicate: "None", Object: "None" },
  ]);
  const [show, setShow] = useState(false);

  const showTextResults = async () => {
    setTextResults("Loading...");
    await axios
      .get(`http://localhost:3500/verbalise/${queryInput}`)
      .then((res) => {
        setTextResults(res.data.sentences);
        setGridInput(res.data.trouples);
        // console.log(res.data);
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
      <p>The information after verbalisation is shown in the box below.</p>
      <div className="paragraphBox">
        <div className="AudioSymbol">
          <Speech paragraph={textResults} />
          {/*The Text to speech element. Takes in the text results*/}
        </div>
        <p>{textResults}</p>
      </div>
      <div className="showHide">
        {/* The table element goes in here. Two buttons exist to either hide on click or show on click. The grid takes the res.data.trouples information as gridInput*/}
        <p>The information before verbalisation is shown in the table below.</p>
        <button onClick={() => setShow(true)}>Show</button>
        <button onClick={() => setShow(false)}>Hide</button>
        {show ? <Grid gridInfo={gridInput} /> : null}
      </div>
    </div>
  );
}

export default StartQuery;
