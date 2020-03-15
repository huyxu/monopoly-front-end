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
