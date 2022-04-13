import * as FaIcons from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";

/**
 * NavBar-- provides the diverse functionality of the navigation bar.
 *          When the screen is in full size, the nav bar will be displayed accross the top of the screen.
 *          When the size of the screen is small enough, the nav bar will adapt to a mobile friendly version,
 *            by becoming a toggle menu when the hamburger icon is clicked  
 */
const NavBar = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);

  const showDropDownMenu = () => setDropDownMenu(!dropDownMenu);

  return (
    <>
      <header className="navBar">
        <a href="#" className="logo">
          Knowledge Graph
        </a>

        <Link to="#" className="menuBars">
          <FaIcons.FaBars onClick={showDropDownMenu} />
        </Link>

{/*If dropDownMenu is true, then the mobile friendly version of the navBar will be implemented */}
        <nav className={dropDownMenu ? "navMenu active" : "navMenu"}>
          <ul className="navMenuItems" onClick={showDropDownMenu}>
            <li className="navBarToggle">
              <Link to="#" className="closeMenuBars">
                <FaIcons.FaTimes />
              </Link>
            </li>
            {MenuItems.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.url}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default NavBar;
