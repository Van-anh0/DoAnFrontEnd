import React from "react";

function ImgComp(props){

    let imgStyles = {
        width:100+"%",
        height:100+"%"

    }
    return <img src={props.src} alt="slide - img" style={imgStyles}></img>
}

export default ImgComp;