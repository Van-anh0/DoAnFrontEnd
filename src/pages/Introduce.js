import React from "react";
import {  useParams } from "react-router";
import Cinetar from "../components/Introduce/Cinestar";
import Slider from "../components/Slider/Slider";
function Introduce(props){
  
    return(
        <div>
            <Slider/>
           <Cinetar/>
        </div>
      
    )
}
export default Introduce;