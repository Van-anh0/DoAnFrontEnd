import React, { useEffect, useState } from "react";
import "./SeatItem.scss";
import { SEAT_AVAILABLE, SEAT_BOOKED, SEAT_CHOOSING } from "utils/constants";
import { useDispatch } from "react-redux";
import { addSeat, removeSeat } from "redux/order/orderSlice";

const Seat = (props) => {
  const { seat } = props;
  const seatNumber = seat.row + seat.col;
  const [seatStatus, setSeatStatus] = useState(SEAT_AVAILABLE);
  const dispatch = useDispatch();

  useEffect(() => {
    setSeatStatus(props.seat.status);
  }, [props.seat.status]);

  const seatClickHandler = () => {
    if (seatStatus === SEAT_AVAILABLE) {
      setSeatStatus(SEAT_CHOOSING);
      dispatch(addSeat(seat));
    } else {
      setSeatStatus(SEAT_AVAILABLE);
      dispatch(removeSeat(seat));
    }
  };

  const seatClassStatus = "seat " + seatStatus;
  return (
    <div className={seatClassStatus} onClick={() => seatClickHandler()}>
      <div className="seat_img">
        <p>{seatNumber}</p>
        <img src="https://cinestar.com.vn/catalog/view/theme/default/images/single-chair.png"></img>
      </div>
    </div>
  );
};

export default Seat;
