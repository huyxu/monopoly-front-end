import React, { Component, Fragment } from "react";
import "./SlotStation.css";

class SlotStation extends Component {
  render() {
    return (
      <div className={"game__slot game__slot--" + this.props.position}>
        {this.props.position === "right" || this.props.position === "left" ? (
          <Fragment>
            <div class="slot__content--bus">
              <p class="slot__title">Bus Station</p>

              <p class="slot__price">
                <i class="fas fa-shuttle-van bus--icon"></i>$200
              </p>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div class="slot__content--bus">
              <p class="slot__title">Bus Station</p>
              <i class="fas fa-shuttle-van"></i>
              <p class="slot__price">$200</p>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default SlotStation;
