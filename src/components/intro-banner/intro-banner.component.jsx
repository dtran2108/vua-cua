import React from "react";
import { DeliveryInfo } from "../delivery-info/delivery-info.component";
import { SearchBox } from "../search-box/search-box.component";
import { UserDropdown } from '../user-dropdown/user-dropdown.component';

import cart from "../../static/png/cart.png";
import logo from "../../static/png/crab.png";
import "./intro-banner.styles.css";

export const IntroBanner = () => {
  return (
    <div className="d-flex justify-content-between intro-wrapper">
      <DeliveryInfo />
      <img src={logo} alt="logo" width="auto" height="70px" />
      <div className="d-flex flex-column justify-content-center align-items-end">
        <SearchBox className="search-box" />
        <div
          className="d-flex justify-content-end align-items-center"
          style={{ marginTop: "10px" }}
        >
          <img src={cart} alt="shopping cart" width="30px" height="30px" />
          <h2 className="flex-grow-1 price-tag" style={{ margin: "0 16px" }}>9,999,000</h2>
          <UserDropdown />
        </div>
      </div>
    </div>
  );
};
