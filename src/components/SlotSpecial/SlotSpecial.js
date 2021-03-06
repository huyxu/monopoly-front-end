import React, { Component, Fragment } from "react";
import "./SlotSpecial.css";

class SlotSpecial extends Component {
  render() {
    return (
      <Fragment>
        {this.props.type === "lucky" ? (
          <div
            className={
              "game__slot slot__special--lucky game__slot--" +
              this.props.position
            }
          >
            <ion-icon name="help-outline" />
          </div>
        ) : (
          <div
            className={
              "game__slot slot__special--unlucky game__slot--" +
              this.props.position
            }
          >
            <ion-icon name="alert-outline" />
          </div>
        )}
      </Fragment>
    );
  }
}

export default SlotSpecial;