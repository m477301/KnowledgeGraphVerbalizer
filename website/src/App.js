import { useEffect } from "react";
import "./App.css";
import { queryWikidataWithSparql } from "./Wikidata/APIWrapper";

function App() {
  useEffect(() => {
    async function fetchData() {
      const res = await queryWikidataWithSparql();
      console.log("RES", res);
    }
    fetchData();
  }, []);
  return <div className="App">Hello React!</div>;
}

export default App;
