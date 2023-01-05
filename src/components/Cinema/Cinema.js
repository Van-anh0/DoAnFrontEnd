import React from "react";
import Price from "../Price/Price";
import Slider from "../Slider/Slider";
import BreadcrumbCinema from "components/Breadcrumb/BreadcrumbCinema";
function Cinema() {
  return (
    <div>
      <BreadcrumbCinema/>
      <Slider />
      <Price />
      
    </div>
  );
}
export default Cinema;
