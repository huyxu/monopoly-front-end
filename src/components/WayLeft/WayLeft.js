import React, { Component } from 'react';
import './WayLeft.css';
import Slot from '../Slot/Slot';

class WayLeft extends Component {
  render() {
    const position = 'left';
    return (
      <div className="way__col way__col--left">
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
        <Slot position={position} />
      </div>
    );
  }
}

export default WayLeft;