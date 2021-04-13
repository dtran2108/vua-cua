import React from "react";

import fullLogo from "../../static/png/full-logo.png";
import facebook from "../../static/png/facebook.png";
import instagram from "../../static/png/insta.png";
import youtube from "../../static/png/youtube.png";
import "./connect-container.styles.css";

export const ConnectContainer = () => {
  return (
    <div className="d-flex justify-content-between align-items-center connect-container">
      <img src={fullLogo} alt="full logo" />
      <div className="d-flex flex-column align-items-center coupon-container">
        <h2 className="coupon-des">
          Để lại địa chỉ email để đăng ký nhận khuyến mãi nhé!
        </h2>
        <input placeholder="Nhập địa chỉ email của bạn" />
      </div>
      <div className="vertical-divider" />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="t1">Vua Cua đang ở rất gần bạn đấy!</h1>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "200px" }}
        >
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={youtube} alt="YouTube" />
        </div>
        <h1 className="t2">Hãy kết nối và chia sẻ với chúng tôi nhé!</h1>
      </div>
    </div>
  );
};
