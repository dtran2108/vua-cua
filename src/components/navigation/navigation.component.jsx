import React from "react";
import { AddressSearchBox } from '../address-search-box/address-search-box.component';

import { Address } from "../../static/svg";
import "./navigation.styles.css";

export const Navigation = () => {
  return (
    <div className="d-flex justify-content-between align-items-center navigation-wrap">
      <div className="d-flex">
        <Address width="40px" height="40px" style={{ marginRight: '10px' }}/>
        <AddressSearchBox />
      </div>
      <h2 className="navigate-item">Thực đơn</h2>
      <h2 className="navigate-item">Đặt bàn</h2>
      <h2 className="navigate-item">Khuyến mãi</h2>
      <h2 className="navigate-item">Chia sẻ bí quyết</h2>
      <h2 className="navigate-item">Tham quan nhà hàng</h2>
    </div>
  );
};
