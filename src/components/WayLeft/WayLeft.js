import React, { Component } from "react";
import "./WayLeft.css";
import Slot from "../Slot/Slot";
import SlotSpecial from "../SlotSpecial/SlotSpecial";

import { slotLeft } from "../../data/slotArr";

class WayLeft extends Component {
  render() {
    const position = "left";
    const slots = [];

    slotLeft.forEach(el => {
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
      <div className="way__col way__col--left">
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

export default WayLeft;
