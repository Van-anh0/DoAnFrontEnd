import React, { useContext, useState } from 'react'
import './Seat.scss'

const Seat = (props) => {
    const [seatStatus, setSeatStatus] = useState(props.seat.status)

    const seatNumber = props.seat.id
    const seatPrice = props.seat.price
    const seatClickHandler = () => {
        if (seatStatus === "default") {
            setSeatStatus("choosing")
        } else {
            setSeatStatus("default")
        }


    }

    return (
        <div className="colSeat">
            {seatStatus == "booked" ?
                (
                    <div className={`seat seat-${seatNumber} ${seatStatus} seat-${seatStatus}`}>{seatNumber}</div>
                ) : (
                    <div className={`seat seat-${seatNumber} ${seatStatus} seat-${seatStatus}`}
                        onClick={() => seatClickHandler()} >{seatNumber}</div>
                )
            }

        </div>
    )
}

export default Seat