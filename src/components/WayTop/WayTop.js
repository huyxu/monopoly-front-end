import React, { Component } from "react";
import "./WayTop.css";
import Slot from "../../components/Slot/Slot";
import SlotSpecial from "../SlotSpecial/SlotSpecial";

class WayTop extends Component {
  render() {
    const position = "top";
    return (
      <div className="way__row way__row--top d-flex flex-row">
        <SlotSpecial position={position} type={"lucky"} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <SlotSpecial position={position} type={"unlucky"} />
        <Slot position={position} />
      </div>
    );
  }
}

export default WayTop;
