import React from "react";
import "./Grid.css";

/*A simple table where the trouple values are displayed with a map function. */
const Grid = (props) => {
  return (
    <div className="Table">
      <table>
        <tr>
          <th>Subject</th>
          <th>Predicate</th>
          <th>Object</th>
        </tr>
        {props.gridInfo.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.subject}</td>
              <td>{val.predicate}</td>
              <td>{val.object}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Grid;
