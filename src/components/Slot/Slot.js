import React, { Component, Fragment } from "react";
import "./Slot.css";

class Slot extends Component {
  render() {
    let styles = {
      backgroundColor: this.props.color
    };
    return (
      <div
        className={"game__slot game__slot--" + this.props.position}
        style={styles}
      >
        {this.props.position === "top" || this.props.position === "left" ? (
          <Fragment>
            <div className="slot__content">
              <p className="slot__title">{this.props.name}</p>
              <p className="slot__price">${this.props.price}</p>
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
              <p className="slot__title">{this.props.name}</p>
              <p className="slot__price">${this.props.price}</p>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Slot;
