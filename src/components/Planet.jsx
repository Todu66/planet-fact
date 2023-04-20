import { useState } from "react";
import "./Planet.css";

const Planet = (props) => {
  let [dataButton, setDataButton] = useState(props.image1);
  function overView() {
    setDataButton((dataButton = props.image1));
  }
  function structure() {
    setDataButton((dataButton = props.image2));
  }

  function surface() {
    setDataButton((dataButton = props.image3));
  }
  return (
    <>
      <div className="mobile-buttons-container">
        <div className="mobile-div">
          <h2 onClick={overView}>overview</h2>
        </div>
        {/*  */}
        <div className="mobile-div">
          <h2 onClick={structure}>structure</h2>
        </div>
        {/*  */}
        <div className="mobile-div">
          <h2 onClick={surface}>surface</h2>
        </div>
      </div>
      <div className="container">
        <div className="container-left">
          <img src={dataButton} />
        </div>
        <div className="container-right">
          <div className="info-container">
            <h1>{props.name}</h1>
            <p>{props.info}</p>
            <p>Source: Wikipedia</p>
          </div>

          <div className="container-buttons">
            <button onClick={overView}>
              <h2>01 overview</h2>
            </button>
            <button onClick={structure}>
              <h2>02 structure</h2>
            </button>
            <button onClick={surface}>
              <h2>03 surface</h2>
            </button>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="about">
          <h6>ROTATION TIME</h6>
          <h3>{props.time}</h3>
        </div>
        <div className="about">
          <h6>REVOLUTION TIME</h6>
          <h3>{props.revolution}</h3>
        </div>
        <div className="about">
          <h6>RADIUS</h6>
          <h3>{props.radius}</h3>
        </div>
        <div className="about">
          <h6>AVERAGE TEMP</h6>
          <h3>{props.temp}</h3>
        </div>
      </div>
    </>
  );
};

export default Planet;
