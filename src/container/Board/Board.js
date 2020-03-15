import React, { Component } from "react";
import "./Board.css";
import WaySquare from "../WaySquare/WaySquare";
import GameInfo from "../GameInfo/GameInfo";
import WayTop from "../../components/WayTop/WayTop";
import WayRight from "../../components/WayRight/WayRight";
import WayBottom from "../../components/WayBottom/WayBottom";
import WayLeft from "../../components/WayLeft/WayLeft";
class Board extends Component {
  render() {
    return (
      <div className="game__box">
        <WaySquare />
        <WayBottom />
        <WayLeft />
        <WayTop />
        <WayRight />
        <GameInfo />
      </div>
    );
  }
}

export default Board;
