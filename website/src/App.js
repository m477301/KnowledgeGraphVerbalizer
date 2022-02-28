import { useEffect } from "react";
import Header from './Components/Header'
import Button from './Components/Buttons'
import imageOne from './A-knowledge-graph-structure.png'
import { queryWikidataWithSparql } from "./Wikidata/APIWrapper";

function App() {
  useEffect(() => {
    async function fetchData() {
      const res = await queryWikidataWithSparql();
      console.log("RES", res);
    }
    fetchData();
  }, []);
  return (
    <div className='container'>
      <div className='header'>
        <Header/>
        <img src={imageOne} className="image" alt></img>
          <div className="button">
             <Button text='Submit Knowledge Graph' >
             </Button>
               <div className='paragraph'>
               <p>The verbalisation of the Knowledge Graph will appear here</p>
              </div>
          </div>  
       </div>
    </div> 
  );
}

export default App;

