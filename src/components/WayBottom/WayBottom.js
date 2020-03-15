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
      // Chance Slot
      if (el.id === 6 || el.id === 20 || el.id === 33) {
        slots.unshift(<SlotSpecial position={position} type={"lucky"} />);
      }
      // Chest Slot
      else if (el.id === 2 || el.id === 15 || el.id === 30) {
        slots.unshift(<SlotSpecial position={position} type={"unlucky"} />);
      }
      // Square Slot
      else if (el.id === 0 || el.id === 9 || el.id === 18 || el.id === 27) {
        return;
      }
      // Normal Slot
      else {
        slots.unshift(
          <Slot
            position={position}
            name={el.name}
            price={el.price}
            color={el.slotColor}
          />
        );
      }
    });
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
