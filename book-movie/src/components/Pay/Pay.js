import React from "react";
import "../Pay/Pay.scss"
function Pay(props){
    return(
        <div className="item">
            <div className="dv">
            <div className="tt">
                Cảm ơn quý khách đã đến Cinestar!
            <br/>
            Xin quý khách vui lòng kiểm tra lại thông tin đặt vé 
            </div>

            <div className="dt">
                <img src="https://kenh14cdn.com/thumb_w/600/YBmwyUOTNddqMQHuKexRjY2P9DqjI/Image/2015/06/11328956_786517698135088_1034544548_n-34c4f.jpg"></img>
                <div className="dtt">
                    <p>QUẢ TIM MÁU</p>
                    <p>Rạp chiếu: Cinestar Đà Lạt</p>
                    <p>Ngày chiếu: 23/11/2022</p>
                    <p>Xuất chiếu: 16:00</p>
                </div>
            </div>

            <div className="dsghe">
                <div className="ghe">
                <p>Ghế</p>
                <p>5</p>
                <p>45.000 vnđ</p>
                </div>

                <div className="ghe">
                <p>Ghế</p>
                <p>10</p>
                <p>45.000 vnđ</p>
                </div>
            </div>
            

            <div className="tong">
                <h1>TỔNG TIỀN</h1>
                <p><span>95000</span> vnđ</p>
            </div>

            <div className="thanhtoan">
                   Thanh toán
            </div>
        </div>
        </div>
        
    )
}

export default Pay;