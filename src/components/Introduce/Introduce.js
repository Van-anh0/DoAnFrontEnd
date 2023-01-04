import React from "react";
import MovieTheater from "./MovieTheater/MovieTheater";
import Slider from "../Slider/Slider";
import BreadcrumbIntroduce from "components/Breadcrumb/BreadcrumbIntroduce";
function Introduce() {
  return (
    <div>
      <Slider />
      <MovieTheater />
      <BreadcrumbIntroduce />
    </div>
  );
}
export default Introduce;
