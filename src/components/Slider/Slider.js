import React, { useState, useEffect } from "react";
import '../Slider/Slider.css'
import ImgComp from "./ImgComp";
import h1 from "../../assets/images/pics/1.jpg";
import h2 from "../../assets/images/pics/2.jpg";
import h3 from "../../assets/images/pics/3.jpg";
import h4 from "../../assets/images/pics/4.jpg";
import h5 from "../../assets/images/pics/5.jpg";
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
function Slider(){


    //let's create an array for component to show inside the slider
    
    let sliderArr = [<ImgComp src={h1}/>,<ImgComp src={h2}/>,<ImgComp src={h3}/>,<ImgComp src={h4}/>,<ImgComp src={h5}/>];
    const [x,setX] = useState(0);
    
   const goLeft = () => {
    console.log(x);

    x === 0? setX(-100*(sliderArr.length-1)) : setX(x+100);
   };
   const goRight = () => {
    console.log(x);
    x === -100 * (sliderArr.length - 1)? setX(0) : setX(x-100);
   };

  
    return(
        <div className="slider"> 
        {
            sliderArr.map((item,index) => {
                return(
                    <div key = {index} className="slide"
                    style={{transform: `translateX(${x}%)`}}>
                            {item}
                    </div>
                )
            })
        }
        <button id="goLeft" onClick={goLeft}>
            <AiOutlineLeft className="iconLeft"/>
        </button>
        <button id="goRight" onClick={goRight}>
           <AiOutlineRight className="iconRight"/>
        </button>
        
        </div>
    )
}

export default Slider;