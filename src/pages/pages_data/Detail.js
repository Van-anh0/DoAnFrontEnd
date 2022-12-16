import React, {useEffect, useState}  from "react";
import DetailFilm from "../../components/DetailFilm/DetailFilm";
import Header from "../../components/Header/Header";
import {getListMovie} from "../../actions/ApiCall/index"

function Detail(props){
    
    const [film, setFilm] = useState([]);
    // reference
    useEffect(() => {
        let response = getListMovie()
        response.then((result) => {
                console.log("data ne: ", result)
        })
    }, [])
    
    return(
        <div>
            <DetailFilm film={film}/>
        </div>
    )
}

export default Detail;