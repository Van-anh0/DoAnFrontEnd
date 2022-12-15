import React, {useEffect, useState} from "react"
import Seat from './Seat'
import './Seat.scss'
import { Link } from "react-router-dom";
const GenerateSeats = (seats) => {
	return (
		<div className="row">
			{
				seats.map((seat) => {
					return <Seat seat={seat} />
				})
			}
		</div>
	)
}

const SeatMatrix = () => {
    const [seats, setSeats] = useState([]);
    useEffect(() => {
      fetch("/data/seats.json")
      .then(res => res.json())
      .then(data => setSeats(data))

    }, [])
    
	return (
		<div className="movie-complex">
			<div className="nd">
				<p className="title">Tên phim: TÌNH YÊU KHÔNG SỢ HÃI</p>
				<div className="ct">
					<p>Rạp chiếu: Cinestar Đà Lạt</p>
					<p>Suất chiếu: 16:00</p>
					<p>Ngày 23/11/2022</p>
				</div>
			</div>
            <div className="movie-screen">
                <p>Screen</p>
            </div>
			
			<div className="container movie-layout">
				<div>
                    {GenerateSeats(seats)}
                </div>
			</div>

			<div className="ghiChu">
				<h1>Ghi chú</h1>
				<h1>Giá 1 ghế: 45.000vnđ</h1>
				<p>Ghế đã có người đặt: <button className="book"></button></p>
				<p>Ghế chưa có người đặt: <button className="default"></button></p>
				<p>Ghế đang chọn: <button className="select"></button></p>
			</div>
            <div className="movie-button">
                <button>Quay lại</button>
				<Link to={"/thanhtoan"} onClick={() => {}}>
						<button>Thanh toán</button>
				</Link>
               
            </div>
		</div>
	)
}

export default SeatMatrix