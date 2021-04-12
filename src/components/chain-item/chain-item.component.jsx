import React from "react";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";


import "./chain-item.styles.css";

export const ChainItem = (props) => {
  const LearnMoreButton = withStyles({
    root: {
      textTransform: "none",
      borderRadius: "20px",
      fontFamily: "Poppins Medium",
      width: "fit-content",
      boxShadow: "none",
    },
  })(Button);

  return (
    <div className="wrapper">
      <div className="title-container">
        <div className="d-flex justify-content-between align-items-center">
          <img className="img-chain" src={props.imgSrc} alt="chain ex" />
          <h1 className="product-name">{props.title}</h1>
        </div>
        <h2 className="subtitle">{props.subtitle}</h2>
      </div>
      <p className="product-description">{props.description}</p>
      <LearnMoreButton
        variant="outlined"
        color="primary"
      >{`Tìm hiểu thêm >>`}</LearnMoreButton>
    </div>
  );
};
