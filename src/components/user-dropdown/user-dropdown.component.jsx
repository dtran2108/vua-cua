import React from "react";
import { User } from "../../static/svg";
import { ContentButton } from '../dropdown-content-btn/dropdown-content-btn.component';

import "./user-dropdown.styles.css";

export const UserDropdown = () => {
  function toggleDropdown() {
    document.getElementById("userDropdown").classList.toggle("show");
  }

  return (
    <div className="dropdown">
      <User
        style={{ cursor: "pointer" }}
        onMouseEnter={toggleDropdown}
        className="flex-grow-1"
        width="30px"
        height="30px"
      />
      <div
        id="userDropdown"
        class="dropdown-content"
        onMouseLeave={toggleDropdown}
      >
        <ContentButton name="Đăng nhập" fontColor="black" backgroundColor="#ffad00" />
        <ContentButton name="Đăng Ký" fontColor="black" backgroundColor="#ffad00" />
        <ContentButton name="Facebook" fontColor="white" backgroundColor="#4167b2" />
        <ContentButton name="Google" fontColor="white" backgroundColor="#ea4235" />
        <p>Đăng ký thành viên ngay để nhận nhiều ưu đãi!</p>
      </div>
    </div>
  );
};
