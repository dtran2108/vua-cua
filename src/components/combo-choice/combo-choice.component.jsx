import React from "react";
import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import crabCombo from "../../static/png/combo-crab.png";

import "./combo-choice.styles.css";

export const ComboChoice = (props) => {
  return (
    <div className="container combo-wrap">
      <div className="row">
        <div className="col img-wrap">
          <img src={crabCombo} alt="combo1" />
        </div>
        <div className="col" style={{ width: "70%" }}>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="combo-name"><b>{props.name}</b></h1>
            <div className="d-flex flex-column justify-content-end">
              <h1 className="combo-price">{props.price}</h1>
              {props.discount && (
                <h2 className="discount">
                  <del>{props.discount}</del>
                </h2>
              )}
            </div>
          </div>
          <div className="row">
            <p>
              Gồm 3 con cua thịt Cà Mau và 2 món ăn kèm tuỳ chọn (trong 8 món ăn
              kèm)
            </p>
            <p>Thích hợp cho 2-3 người dùng</p>
            <p>Giá chưa bao gồm 10% VAT</p>
          </div>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ marginTop: "12px" }}
          >
            <div className="d-flex">
              <Chip
                color="secondary"
                size="small"
                label={<b>GIÁ SỐC</b>}
                style={{ marginRight: "12px" }}
              />
              <Chip color="primary" size="small" label={<b>FREESHIP</b>} />
            </div>
            <div className="d-flex">
              <Fab
                size="small"
                color="secondary"
                aria-label="add"
                style={{ marginRight: "12px" }}
              >
                <AddIcon />
              </Fab>
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                style={{ textTransform: "none" }}
              >
                <b>i</b>
              </Fab>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
