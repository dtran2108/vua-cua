// eslint-disable-next-line no-unused-vars
import React from "react";

import phone from "../../static/png/phone.png";
import "./delivery-info.styles.css";

export const DeliveryInfo = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <div className="d-flex align-items-center justify-content-center margin-right">
          <img src={phone} alt="phone-info" width="50px" height="50px" />
        </div>

        <div>
          <h1>1900 6333 87</h1>
          <p>Nhà hàng: 10:00 - 23:00 (T2 - Chủ Nhật)</p>
          <p>Giao hàng tận nơi: 10:00 - 21:30 (T2 - Chủ Nhật)</p>
        </div>
      </div>
    </div>
  );
};
