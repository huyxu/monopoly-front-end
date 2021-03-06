import React, { Component } from "react";
import "./WayLeft.css";
import Slot from "../Slot/Slot";
import SlotSpecial from "../SlotSpecial/SlotSpecial";

import { slotLeft } from "../../data/slotArr";
import SlotStation from "../SlotStation/SlotStation";
import SlotTax from "../SlotTax/SlotTax";

class WayLeft extends Component {
  render() {
    const position = "left";
    const slots = [];

    slotLeft.forEach(el => {
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
      // Tax Slot
      else if (el.id === 4) {
        slots.unshift(<SlotTax position={position} />);
      }
      // Station Slot
      else if (el.id === 13 || el.id === 23 || el.id === 32) {
        slots.push(<SlotStation position={position} />);
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
