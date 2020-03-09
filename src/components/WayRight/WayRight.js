import React, { Component } from 'react';
import './WayRight.css';
import Slot from '../Slot/Slot';

class WayRight extends Component {
  render() {
    const position = 'right';
    return (
      <div className="way__col way__col--right">
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

export default WayRight;