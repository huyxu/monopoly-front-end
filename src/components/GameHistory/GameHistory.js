import React, { Component } from "react";
import "./GameHistory.css";
import HistoryInfo from "../HistoryInfo/HistoryInfo";

class GameHistory extends Component {
  render() {
    return (
      <div className="game__history overflow-auto">
        <HistoryInfo content={"Nam khóc"} />
        <HistoryInfo content={"Huhuhu"} />
        <HistoryInfo content={"Huhuhu"} />
        <HistoryInfo content={"Huhuhu"} />
        <HistoryInfo content={"Huhuhu"} />
        <HistoryInfo content={"Huhuhu"} />
        <HistoryInfo content={"Huhuhu"} />
        <HistoryInfo content={"Huhuhu"} />
        <HistoryInfo content={"Huhuhu"} />
      </div>
    );
  }
}

export default GameHistory;
