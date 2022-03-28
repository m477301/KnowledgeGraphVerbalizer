import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Start.css";
import Speech from "./Speech";
import { FaTruckLoading } from "react-icons/fa";

function StartQuery() {
  const [paragraph, setParagraph] = useState(null);
  const [textResults, setTextResults] = useState(
    "Results will be shown here..."
  );

  const [queryInput, setQueryInput] = useState("Lionel Messi");

  const updateQuery = (option) => setQueryInput(option);

  const showTextResults = (results) => setTextResults(results);

  function handleSelectChange(event) {
    // console.log(event);
    updateQuery(event.target.value);
    //We send this new value to the other server so they can query it
  }

  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:3500/verbalise/Messi").then((res) => {
        setParagraph(res.data);
      });
    }
    fetchData();
  }, []);

  if (paragraph) {
    return (
      <>
        <select onChange={handleSelectChange}>
          <option value="Lionel Messi">Lionel Messi</option>
          <option value="Cristiano Ronaldo">Cristiano Ronaldo</option>
        </select>
        setQueryInput
        <h2 className="title">Query selected: {queryInput}</h2>
        <button
          type="button"
          className="resultsButton"
          onClick={() => showTextResults(paragraph)}
        >
          Click to see Results
        </button>
        <div className="paragraphBox">
          <p>{textResults}</p>
        </div>
        <div>
          <Speech paragraph={paragraph}></Speech>
        </div>
      </>
    );
  }

  return (
    <>
      <select onChange={handleSelectChange}>
        <option value="Lionel Messi">Lionel Messi</option>
        <option value="Cristiano Ronaldo">Cristiano Ronaldo</option>
      </select>
      <h2 className="title">Query selected: testing</h2>
      <button
        type="button"
        className="resultsButton"
        onClick={() => showTextResults(paragraph)}
      >
        Click to see Results
      </button>
      <div className="paragraphBox">
        <p>Loading...</p>
      </div>
    </>
  );
}

export default StartQuery;
