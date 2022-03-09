import React from 'react';
import imageOne from './A-knowledge-graph-structure.png';
import './Home.css';


function Home() {
  return (
      <>
        <div className='home'>
        <p style ={{display: 'inline-block', alignItems: 'center', textAlign: 'center'}}>
        <h1>Hey Knowledge <br/> Graph,<br/>
                tell me something!</h1>   
          
        </p>

        <img src={imageOne} className='image' alt='' class="center" 
        width={300}
        height={600}/>
                
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