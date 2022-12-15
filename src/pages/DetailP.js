import React from "react";
import {  useParams } from "react-router";
import Detail from "./pages_data/Detail";
function DetailP(props){
   
        let {filmId} = useParams();
        console.log(filmId);
        return(
            <div>
                <Detail filmId={filmId}/>
            </div>
          
        )
    
}

export default DetailP;