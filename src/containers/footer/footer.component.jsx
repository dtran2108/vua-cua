import React from "react";

import bocongthuong from "../../static/png/bocongthuong.png";
import whitePhone from "../../static/png/white-phone.png";
import "./footer.styles.css";

export const Footer = () => {
  return (
    <div className="footer-container d-flex justify-content-between flex-wrap align-items-center">
      <ul>
        <li className="res-name">Nhà hàng vua cua</li>
        <li>Công ty cổ phần thương mại dịch vụ Vua Cua</li>
        <li>14 Phan Tôn, phường Đakao, quận 1</li>
        <li>ĐT: 0283 6203862. Email: cskh@vuacua.vn </li>
      </ul>
      <ul>
        <li>Về Vua Cua</li>
        <li>Chính sách và quy định chung</li>
        <li>Hướng dẫn đặt hàng</li>
        <li>Giao hàng - Thanh toán</li>
        <li>Khiếu nại & giải quyết khiếu nại</li>
        <li>Bảo mật</li>
      </ul>
      <img src={bocongthuong} alt="Chứng nhận bộ công thương" />
      <ul>
        <li className="d-flex justify-content-start align-items-center">
          <img src={whitePhone} alt="white phone" style={{ position: 'relative', bottom: 8 }} />
          <h1 className="phone-number">1900 6333 87</h1>
        </li>
        <li>Giờ hoạt động</li>
        <li>Nhà hàng: 10:00 - 23:00 (T2 - Chủ Nhật)</li>
        <li>Giao hàng tận nơi: 10:00 - 21:30 (T2 - Chủ Nhật)</li>
      </ul>
    </div>
  );
};
