import React, { useState } from "react";
import "./Cart.scss";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentorder } from "redux/order/orderSlice";
import { orderApi } from "actions";
import { clearCurrentOrder } from "redux/order/orderSlice";
import { useDispatch } from "react-redux";
import { trimDate, trimTime } from "utils/common";
import { selectCurrentUser, selectIsAuthenticated } from "redux/user/userSlice";

function Cart() {
  const order = useSelector(selectCurrentorder);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateOrder = () => {
    if (!isAuthenticated) {
      // update isLoginModalOpen in userSlice
      alert("Vui lòng đăng nhập để thanh toán");
      return;
    }

    order.user_id = user.id;
    orderApi.createOrder(order).then(() => {
      dispatch(clearCurrentOrder());
      alert("thanh toan thanh cong");
    });
  };

  return (
    <div className="item">
      <div className="dv">
        <div className="tt">
          Cảm ơn quý khách đã đến Cinestar!
          <br />
        </div>

        {order?.total ? (
          <>
            <div className="dt">
              <img src={order.movie_image}></img>
              <div className="dtt">
                <p>Phim: {order.movie_name}</p>
                <p>Rạp chiếu: {order.cinema_name}</p>
                <p>Ngày chiếu: {trimDate(order.showtime)}</p>
                <p>Xuất chiếu: {trimTime(order.showtime)}</p>
              </div>
            </div>
            <div className="dsghe">
              {order.show_seat?.map((item, index) => (
                <div className="ghe" key={index}>
                  <p>Ghế</p>
                  <p>{item.seat_name}</p>
                  <p>{item.row + item.col}</p>
                  <p>{item.price}đ</p>
                </div>
              ))}
            </div>
            <div className="dsghe">
              {order.order_item?.map((orderItem, index) => (
                <div className="ghe" key={index}>
                  <p>Combo</p>
                  <p>{orderItem.product_name}</p>
                  <p>{orderItem.quantity}</p>
                  <p>{orderItem.price}đ</p>
                </div>
              ))}
            </div>

            <div className="tong">
              <h1>TỔNG TIỀN</h1>
              <p>
                <span>{order.total}</span> vnđ
              </p>
            </div>
          </>
        ) : (
          <div></div>
        )}

        <div className="button_tt">
          <Link to={"/"} className="thanhtoan">
            Quay lại trang chủ
          </Link>

          {order ? (
            <div className="gr_tt">
              <div className="thanhtoan" onClick={() => navigate(-1)}>
                Quay lại
              </div>
              <div
                className={order?.show_seat.length > 0 ? "thanhtoan" : ""}
                onClick={() => handleCreateOrder()}
              >
                Thanh toán
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
