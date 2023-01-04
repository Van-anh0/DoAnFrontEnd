import React from "react";
import Price from "../Price/Price";
import Slider from "../Slider/Slider";
import BreadcrumbCinema from "components/Breadcrumb/BreadcrumbCinema";
function Cinema() {
  return (
    <div>
      <Slider />
      <Price />
      <BreadcrumbCinema/>
    </div>
  );
}
export default Cinema;
