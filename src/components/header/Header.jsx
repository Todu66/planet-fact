import React, { useState } from "react";
import mercuryOval from "../../images/mercuryOval.png"
import venusOval from "../../images/venusOval.png"
import earthOval from "../../images/earthOval.png"
import "./Header.css";
import Hamburger from "hamburger-react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const HeaderLinks = (props) => {
    return (
      <li>
        <a href={props.link}>
          {showMenu && <img src={props.image4}  /> }
          {props.name}
        </a>
      </li>
    );
  };

  return (
    <header>
      <nav>
        <a>
          <h1>THE PLANETS</h1>
        </a>

        <ul className={`NavLinks ${showMenu ? "show" : ""}`}>
          <HeaderLinks link="/" image4={mercuryOval} name="MERCURY" />
          <HeaderLinks link="/venus" image4={venusOval} name="VENUS" />
          <HeaderLinks link="/earth" image4={earthOval} name="EARTH" />
          <HeaderLinks link="/mars" name="MARS" />
          <HeaderLinks link="/jupiter" name="JUPITER" />
          <HeaderLinks link="/saturn" name="SATURN" />
          <HeaderLinks link="/uranus" name="URANUS" />
          <HeaderLinks link="/neptune" name="NEPTUNE" />
        </ul>

        <Hamburger
          className="HamburgerButton"
          toggled={showMenu}
          toggle={setShowMenu}
        />
      </nav>

      <hr></hr>
    </header>
  );
};

export default Header;
