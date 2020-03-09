import React, { Component, Fragment } from "react";
import airplaneIcon from './icons/airplane.png';
import handcuffsIcon from './icons/handcuffs.png';
import jailIcon from "./icons/jail.png";
import startIcon from "./icons/start.png";
import './WaySquare.css';

class WaySquare extends Component {
  render() {
    return (
      <Fragment>
        <div className="way__square way__square-topleft">
          <img
            src={airplaneIcon}
            alt="Plane Icon"
            className="way__square-icon--png"
          />
        </div>
        <div className="way__square way__square-topright">
          <img
            src={handcuffsIcon}
            alt="Handcuffs Icon"
            className="way__square-icon--png"
          />
        </div>
        <div className="way__square way__square-bottomleft">
          <img
            src={jailIcon}
            alt="Jail Icon"
            className="way__square-icon--png"
          />
        </div>
        <div className="way__square way__square-bottomright">
          <img
            src={startIcon}
            alt="Start Icon"
            className="way__square-icon--png"
          />
        </div>
      </Fragment>
    );
  }
}

export default WaySquare;
