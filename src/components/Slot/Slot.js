import React, { Component, Fragment } from "react";
import './Slot.css';

class Slot extends Component {
  render() {
    return (
      <div className={"game__slot game__slot--" + this.props.position}>
        {this.props.position === "top" || this.props.position === "left" ? (
          <Fragment>
            <div className="slot__content">
              <p className="slot__title">Hưng Yên</p>
              <p className="slot__price">$3500</p>
            </div>
            <div className="slot__house">
              <div className="house" />
              <div className="house" />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="slot__house">
              <div className="house" />
              <div className="house" />
            </div>
            <div className="slot__content">
              <p className="slot__title">Hưng Yên</p>
              <p className="slot__price">$3500</p>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Slot;
