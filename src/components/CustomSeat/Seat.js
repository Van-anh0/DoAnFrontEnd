import React, { useState } from "react";
import "./Seat.scss";
import {
  SEAT_DEFAULT,
  SEAT_BOOKED,
  SEAT_CHOOSING,
} from "../../utils/constants";

const Seat = (props) => {
  const [seatStatus, setSeatStatus] = useState(props.seat.status);

  const seatNumber = props.seat.name;
  const seatPrice = props.seat.price;
  const seatClickHandler = () => {
    if (seatStatus === SEAT_DEFAULT) {
      setSeatStatus(SEAT_CHOOSING);
    } else {
      setSeatStatus(SEAT_DEFAULT);
    }
  };

  return (
    <div className="colSeat">
      {seatStatus == SEAT_BOOKED ? (
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
