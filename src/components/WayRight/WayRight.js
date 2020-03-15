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
      // Chance Slot
      if (el.id === 6 || el.id === 20 || el.id === 33) {
        slots.push(<SlotSpecial position={position} type={"lucky"} />);
      }
      // Chest Slot
      else if (el.id === 2 || el.id === 15 || el.id === 30) {
        slots.push(<SlotSpecial position={position} type={"unlucky"} />);
      }
      // Square Slot
      else if (el.id === 0 || el.id === 9 || el.id === 18 || el.id === 27) {
        return;
      }
      // Normal Slot
      else {
        slots.push(
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
