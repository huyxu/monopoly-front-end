import React, { Component } from "react";
import "./SlotInfo.css";

class SlotInfo extends Component {
  render() {
    return (
      <div className="slot__inf">
        <div className="border--plus">
          <div className="slot__name">Hưng Yên</div>
          <div className="line" />
          <p>
            Giá mua ô đất <span className="price">$2500</span>
          </p>
          <p>
            <i className="fas fa-home mr-1" />
            Giá xây 1 căn nhà
            <span className="price">$1500</span>
          </p>
          <p>
            <i className="fas fa-building mr-1" />
            Giá xây khách sạn<span className="price">$1500</span>
          </p>
          <div className="line" />
          <p>
            Phí thu về từ ô đất<span className="price">$1500</span>
          </p>
          <p>
            Phí thu khi có 1 nhà<span className="price">$1500</span>
          </p>
          <p>
            Phí thu khi có 2 nhà<span className="price">$1500</span>
          </p>
          <p>
            Phí thu khi có 3 nhà<span className="price">$1500</span>
          </p>
          <p>
            Phí thu khi có 4 nhà<span className="price">$1500</span>
          </p>
          <p>
            Phí thu khi có khách sạn<span className="price">$1500</span>
          </p>
          <div className="line" />
          <p className="owner__inf">
            <i className="fas fa-user-check mr-1" />
            Owner:
            <span className="owner__name"> Nam Do</span>
          </p>
        </div>
      </div>
    );
  }
}

export default SlotInfo;
