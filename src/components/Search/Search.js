import React from "react";
import "./Search.scss";
import { orderApi } from "actions";
import { Link } from "react-router-dom";
function Search(props) {
  return (
    <div className="search">
      <div className="start">Kết quả tìm kiếm</div>

      <div>
        {props.films.data?.map((movie) => (
          <Link
            className="showtime__content"
            to={"/detail/" + movie.id}
            key={movie.id}
          >
            <div className="showtime__content_img">
              <img src={movie.poster}></img>
            </div>
            <div className="showtime__content_text">
              <p className="showtime__content_text__name">
                {movie.name} ({movie.rated})
              </p>
              <p>{movie.spoil}</p>
              <div className="showtime__content_text_category">
                <span>{movie.format_movie ? movie.format_movie : "2D"}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;
