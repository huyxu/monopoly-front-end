import React, { Component } from "react";
import "./WayBottom.css";
import Slot from "../Slot/Slot";
import SlotSpecial from "../SlotSpecial/SlotSpecial";

class WayBottom extends Component {
  render() {
    const position = "bottom";
    return (
      <div className="way__row way__row--bottom d-flex flex-row">
        <Slot position={position} />
        <SlotSpecial position={position} type={"unlucky"} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <SlotSpecial position={position} type={"lucky"} />
      </div>
    );
  }
}

export default WayBottom;
