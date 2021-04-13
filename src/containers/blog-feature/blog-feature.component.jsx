import React from "react";
import Chip from "@material-ui/core/Chip";

import test from '../../static/png/combo-crab.png';
import "./blog-feature.styles.css";

export const BlogFeature = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center blog-wrap">
      <h2 className="b-sub">Chia sẻ cũng là một cách yêu thương</h2>
      <h1 className="b-title">Bí quyết tạo nên một món ăn ngon</h1>
      <div className="d-flex justify-content-between align-items-center">
        <div className="video-container">
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/K9_VFxzCuQ0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div style={{ height: 500, maxWidth: 450 }}>
          <div className="d-flex dish-item">
            <img src={test} alt="test pic" height="155" className="dish-w" />
            <h5 className="dish-c"><b>Bí quyết nấu sốt me chuẩn vị, ai ăn cũng ghiền!</b></h5>
          </div>
          <div className="d-flex dish-item">
            <img src={test} alt="test pic" height="155" className="dish-w" />
            <h5 className="dish-c"><b>Cách sơ chế cá sạch, dễ dàng không mất quá nhiều thời gian ngay tại nhà!</b></h5>
          </div>
          <div className="d-flex dish-item">
            <img src={test} alt="test pic" height="155" className="dish-w" />
            <h5 className="dish-c"><b>Bạn có biết? Cua Cà Mau đặc biệt ngon hơn khi chế biến cùng các loại sốt đa hương vị!</b></h5>
          </div>
        </div>
      </div>
      <center>
        <b>Xem thêm các bài viết khác tại&nbsp;&nbsp;</b>
        <Chip
          style={{ position: "relative", bottom: "2px" }}
          color="secondary"
          label={<b>Blog Vua Cua</b>}
        />
      </center>
    </div>
  );
};
