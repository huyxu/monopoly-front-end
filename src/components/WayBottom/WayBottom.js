import React, { Component } from "react";
import "./WayBottom.css";
import Slot from "../Slot/Slot";
import SlotSpecial from "../SlotSpecial/SlotSpecial";

import { slotBottom } from "../../data/slotArr";

class WayBottom extends Component {
  render() {
    const position = "bottom";
    const slots = [];

    slotBottom.forEach(el => {
      if (el.id === 100) {
        slots.unshift(<SlotSpecial position={position} type={"lucky"} />);
      } else if (el.id === 101) {
        slots.unshift(<SlotSpecial position={position} type={"unlucky"} />);
      } else if (
        el.id === 107 ||
        el.id === 104 ||
        el.id === 105 ||
        el.id === 106
      ) {
        return;
      } else {
        slots.unshift(<Slot position={position} name={el.name} />);
      }
    });
    console.log(slots);
    return (
      <div className="way__row way__row--bottom d-flex flex-row">
        {/* <Slot position={position} />
        <SlotSpecial position={position} type={"unlucky"} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <SlotSpecial position={position} type={"lucky"} /> */}
        {slots}
      </div>
    );
  }
}

export default WayBottom;
