import React, { Component } from "react";
import "./GameHistory.css";
import HistoryInfo from '../HistoryInfo/HistoryInfo';

class GameHistory extends Component {
  render() {
    return (
      <div className="game__history overflow-auto">
        <HistoryInfo content={"Nam khóc"} />
        <HistoryInfo content={"Hu hu hu"} />
        <HistoryInfo content={"Hu hu hu"} />
        <HistoryInfo content={"Hu hu hu"} />
        <HistoryInfo content={"Hu hu hu"} />
        <HistoryInfo content={"Hu hu hu"} />
        <HistoryInfo content={"Hu hu hu"} />
        <HistoryInfo content={"Hu hu hu"} />
        <HistoryInfo content={"Hu hu hu"} />
      </div>
    );
  }
}

export default GameHistory;
