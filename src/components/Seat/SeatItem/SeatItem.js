import React, { useState } from "react";
import "./SeatItem.scss";
import {
  SEAT_DEFAULT,
  SEAT_BOOKED,
  SEAT_CHOOSING,
} from "utils/constants";
import { useDispatch } from "react-redux";
import { addSeat, removeSeat } from "redux/order/orderSlice";

const Seat = (props) => {
  const { seat } = props;
  const seatNumber = seat.name;
  const [seatStatus, setSeatStatus] = useState(props.seat.status);
  const dispatch = useDispatch();

  const seatClickHandler = () => {
    if (seatStatus === SEAT_DEFAULT) {
      setSeatStatus(SEAT_CHOOSING);
      dispatch(addSeat(seat));
    } else {
      setSeatStatus(SEAT_DEFAULT);
      dispatch(removeSeat(seat));
    }
  };

  return (
    <div className="colSeat">
      {seatStatus === SEAT_BOOKED ? (
        <div
          className={`seat seat-${seatNumber} ${seatStatus} seat-${seatStatus}`}
        >
          {seatNumber}
        </div>
      ) : (
        <div
          className={`seat seat-${seatNumber} ${seatStatus} seat-${seatStatus}`}
          onClick={() => seatClickHandler()}
        >
          {seatNumber}
        </div>
      )}
    </div>
  );
};

export default Seat;
