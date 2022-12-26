import React, { useState } from "react";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import MovieItem from "./MovieItem/MovieItem";
import "./Movie.scss";
import { MOVIE_STATUS_SHOWING, MOVIE_STATUS_TOSHOW } from "utils/constants";

function Movie() {
  const [status, setStatus] = useState(MOVIE_STATUS_SHOWING);
  function handleClickTab(key) {
    setStatus(key);
  }
  
  const TabPane = Tabs.TabPane;
  return (
    <div>
      <Tabs className="tab" onChange={handleClickTab}>
        <TabPane
          className="tab-pane"
          tab="Phim đang chiếu"
          key={MOVIE_STATUS_SHOWING}
        ></TabPane>
        <TabPane tab="Phim sắp chiếu" key={MOVIE_STATUS_TOSHOW}></TabPane>
      </Tabs>
      <MovieItem status={status} />
    </div>
  );
}

export default Movie;
