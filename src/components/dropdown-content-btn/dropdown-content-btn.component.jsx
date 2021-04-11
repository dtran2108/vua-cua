import React from "react";

import "./dropdown-content-btn.styles.css";

export const ContentButton = (props) => {
  return (
    <button
      onClick={props.handleClick}
      style={{ backgroundColor: props.backgroundColor, color: props.fontColor }}
    >
      {props.name}
    </button>
  );
};
