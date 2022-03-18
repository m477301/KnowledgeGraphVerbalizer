import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { renderMatches } from 'react-router-dom';
import Dialog from './Dialog';
import './Start.css';

function StartQuery()  {
    return (
      <div className='startQuery'>
        <button className= 'resultsButton'See Results></button>

       <Dialog>
         Results here.....           
       </Dialog>
    </div>
    );
}

export default StartQuery;