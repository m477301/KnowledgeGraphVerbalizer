import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <div className="startQuery">
        <p>{paragraph}</p>
      </div>
    );
  }

  return (
    <div className="startQuery">
      <h1>Loading...</h1>
    </div>
  );
}

export default StartQuery;
