import React from "react";
import { ChainItem } from "../../components/chain-item/chain-item.component";

import "./chain-container.styles.css";
import chain1 from '../../static/png/chain1.png';
import chain2 from '../../static/png/chain2.png';
import chain3 from '../../static/png/chain3.png';
import chain4 from '../../static/png/chain4.png';

export const ChainContainer = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center chain-container">
      <h1 className="title">Hệ thống vua cua</h1>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: "80%" }}
      >
        <ChainItem
          title="VCR"
          subtitle="Vua Cua Restaurant"
          imgSrc={chain1}
          description="Hệ thống nhà hàng cua Cà Mau và hải sản"
        />
        <ChainItem
          title="VCE"
          subtitle="Vua Cua Express"
          imgSrc={chain2}
          description="Hệ thống cửa hàng chuyên takeaway & delivery"
        />
        <ChainItem
          title="VCF"
          subtitle="Vua Cua Food"
          imgSrc={chain3}
          description="Thương hiệu thực phẩm tươi ngon - an toàn - tiện lợi"
        />
        <ChainItem
          title="VCB"
          subtitle="Vua Cua Bike"
          imgSrc={chain4}
          description="Xe bán cua di động Mang Vua Cua đến gần với bạn hơn!"
        />
      </div>
    </div>
  );
};
