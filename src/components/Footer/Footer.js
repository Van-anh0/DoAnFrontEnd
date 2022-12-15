import React from "react";
import fb from "../../assets/images/fb.png";
import ytb from "../../assets/images/ytb.png";
import "./Footer.scss";
function Footer(){
    return(
        <div className="bg">
            <div className="icon">
                <img src={fb} className="iconFB"></img>
                <img src={ytb}></img>
            </div>

            <div className="content">
                <p>HOTLINE: 091 7399 365</p>
                <p>CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM - RẠP CHIẾU PHIM DALAT</p>
                <p>ĐỊA CHỈ: 7A/1, Mai Anh Đào, P.8, Thành phố Đà Lạt, T.Lâm Đồng</p>
                <p>2019 © CINEMA. ALL RIGHTS RESERVED.</p>
            </div>

        </div>
    )
}

export default Footer;