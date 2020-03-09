import React, { Component } from "react";
import './GameInfo.css';
import PlayerInfo from "../../components/PlayerInfo/PlayerInfo";
import Dice from "../../components/Dice/Dice";
import GameMessage from "../../components/GameMessage/GameMessage";

class GameInfo extends Component {
  render() {
    return (
      <div className="game__inf text-left">
        <PlayerInfo />
        <Dice />
        <GameMessage />
      </div>
    );
  }
}

export default GameInfo;
