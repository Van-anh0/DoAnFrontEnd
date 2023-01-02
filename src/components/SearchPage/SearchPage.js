import React from "react";
import "../SearchPage/Search.scss";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="start">Kết quả tìm kiếm</div>
      <div className="detail">
        <div className="film">
          <img src="https://innovavietnam.vn/wp-content/uploads/poster-561x800.jpg"></img>
        </div>

        <div className="film">
          <img src="https://gaumedia.vn/wp-content/uploads/2021/06/5-buoc-thiet-ke-poster-phim-5.png"></img>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
