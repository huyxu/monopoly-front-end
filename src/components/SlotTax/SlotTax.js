import React, { Component, Fragment } from "react";
import "./SlotTax.css";

class SlotTax extends Component {
  render() {
    return (
      <Fragment>
        <div
          class={
            "game__slot game__slot--tax game__slot--" + this.props.position
          }
        >
          <div class="slot__content--tax">
            <p class="slot__title">Income Tax</p>
            <i class="fas fa-gem"></i>
            <p class="slot__price">$2000</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SlotTax;
