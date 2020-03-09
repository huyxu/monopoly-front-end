import React, { Component } from 'react';
import './Game.css';
import Board from '../Board/Board';
import SideBoard from '../SideBoard/SideBoard';

class Game extends Component {
  render() {
    return (
      <div className="game__container row">
        <Board />
        <SideBoard />
      </div>
    );
  }
}

export default Game;