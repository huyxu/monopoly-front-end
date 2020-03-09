import React, { Component } from "react";
import './SideBoard.css';
import SlotInfo from "../../components/SlotInfo/SlotInfo";
import GameHistory from "../../components/GameHistory/GameHistory";

class SideBoard extends Component {
  render() {
    return (
      <div className="game__sidebar text-left">
        <SlotInfo />
        <GameHistory />
      </div>
    );
  }
}

export default SideBoard;