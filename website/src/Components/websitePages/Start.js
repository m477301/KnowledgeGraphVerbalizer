import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Start.css';
import { queryWikidataWithSparql } from "../../Wikidata/APIWrapper";
import { useEffect } from "react";
//import { verbaliseSentences } from "../../verblisation/tuto";

export default class DropdownMenu extends React.Component {
  constructor(props){
    super(props);
    this.state={value:""};
  }
  /*
  fetchData() {
      const lists = await queryWikidataWithSparql();
      const sentences = verbaliseSentences(lists);
      console.log(sentences);
  }
  */
    
  onChange=event=> {
    console.log("Dropdown Value Changed");
    console.log("value:", event.currentTarget.value);
    /*fetchData();*/
    this.setState({
      value:event.target.value});
  };
  render() {
    return (
      <section>
      <label>
        <h3>
          Select your Query:  
        </h3>
        <select value={this.state.value}onChange={this.onChange}>
        <option value="Messi Verbalisation ">Lionel Messi</option>
        <option value="Ronaldo Verbalisation">Cristiano Ronaldo </option>
      </select>
      </label>

      <div className='paragraph'>
          <p> {this.state.value}</p>
       
      </div>
      </section>
    );
  }
}