import React from "react";
import Chip from "@material-ui/core/Chip";
import { ComboChoice } from "../../components/combo-choice/combo-choice.component";
import "./top-choice-container.styles.css";

export const TopChoiceContainer = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center choice-container">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: "100%", marginBottom: "24px" }}
      >
        <h1 className="choice-title">Lựa chọn hàng đầu</h1>
        <div className="d-flex justify-content-around" style={{ width: "50%" }}>
          <a className="choice-link" href="#!">
            Combo tiết kiệm
          </a>
          <a className="choice-link" href="#!">
            Cua Cà Mau
          </a>
          <a className="choice-link" href="#!">
            Vua cua Food
          </a>
          <a className="choice-link" href="#!">
            Xốt và Nước chấm
          </a>
        </div>
      </div>
      <div className="container" style={{ width: "100%" }}>
        <div className="row">
          <div className="col">
            <ComboChoice name="Combo cua thịt nhỏ" price="399,000đ" />
            <ComboChoice name="Combo cua gạch" price="499,000đ" />
            <ComboChoice
              name="Combo tôm càng"
              price="350,000đ"
              discount="450,000đ"
            />
          </div>
          <div className="col text-right">
            <ComboChoice name="Combo cua thịt vừa" price="499,000đ" />
            <ComboChoice name="Combo crawfish" price="390,000đ" />
            <ComboChoice name="Combo ốc hương" price="390,000đ" />
          </div>
        </div>
      </div>
      <center>
        <b>Và còn nhiều món ăn hấp dẫn khác đang chờ bạn khám phá tại&nbsp;&nbsp;</b>
        <Chip style={{position: 'relative', bottom: '2px' }} color="secondary" label={<b>Thực Đơn Vua Cua</b>} />
      </center>
    </div>
  );
};
