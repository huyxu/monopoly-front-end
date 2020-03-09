import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
  render() {
    return (
      <div className="row game__dice">
        <p>ROLE DICE HERE!</p>
        <div>
          <i className="fas fa-dice-six dice__icon" />
          <i className="fas fa-dice-six dice__icon" />
        </div>
      </div>
    );
  }
}

export default Dice;