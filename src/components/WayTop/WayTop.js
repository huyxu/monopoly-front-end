import React, { Component } from "react";
import "./WayTop.css";
import Slot from "../../components/Slot/Slot";
import SlotSpecial from "../SlotSpecial/SlotSpecial";

import { slotTop } from "../../data/slotArr";

class WayTop extends Component {
  render() {
    const position = "top";
    const slots = [];

    slotTop.forEach(el => {
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
      <div className="way__row way__row--top d-flex flex-row">
        {/* <SlotSpecial position={position} type={"lucky"} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <SlotSpecial position={position} type={"unlucky"} />
        <Slot position={position} /> */}
        {slots}
      </div>
    );
  }
}

export default WayTop;
