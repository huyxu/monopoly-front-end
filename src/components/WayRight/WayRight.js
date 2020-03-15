import React, { Component } from "react";
import "./WayRight.css";
import Slot from "../Slot/Slot";
import SlotSpecial from "../SlotSpecial/SlotSpecial";

import { slotRight } from "../../data/slotArr";

class WayRight extends Component {
  render() {
    const position = "right";
    const slots = [];
    slotRight.forEach(el => {
      if (el.id === 100) {
        slots.push(<SlotSpecial position={position} type={"lucky"} />);
      } else if (el.id === 101) {
        slots.push(<SlotSpecial position={position} type={"unlucky"} />);
      } else if (
        el.id === 107 ||
        el.id === 104 ||
        el.id === 105 ||
        el.id === 106
      ) {
        return;
      } else {
        slots.push(<Slot position={position} name={el.name} />);
      }
    });
    return (
      <div className="way__col way__col--right">
        {/* <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} /> */}
        {slots}
      </div>
    );
  }
}

export default WayRight;
