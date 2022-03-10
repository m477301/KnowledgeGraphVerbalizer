import React from 'react';
import imageOne from './A-knowledge-graph-structure.png';
import './Home.css';


function Home() {
  return (
      <>
        <div className='home'>
        <p style ={{}}>
        <h1>Hey Knowledge <br/> Graph,<br/>
                tell me something!</h1>   
          
        </p>

        <img src={imageOne} className='image' alt='' 
        />
                
          <button className='button' >
              Click to get Started
          </button>      
          </div>
      </>
      
        /*could possibly add in a button 'Get Started' that 
        will bring you directly to page where select query*/
  );
}

export default Home;