import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default class DropdownMenu extends React.Component {
  onChange(event) {
    console.log("Dropdown Value Changed");
    console.log("value:", event.currentTarget.value);
  }
  render() {
    return (
      <select onChange={this.onChange}>
        <option value="Messi">
          Lionel Messi
        </option>
        <option value="Kanye">
          Kanye West
        </option>
        <option value="Brad Pitt">
          Brad Pitt
        </option>
      </select>
    );
  }
}