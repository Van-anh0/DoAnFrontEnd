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

    
    // useEffect(() => {
    //     // call API checkHealth
    //     axios.get(`${API_ROOT_GOLANG}/api/v1/movie/get-list`)
    //     .then((response) => {
    //         setFilm(response.data);
    //       });

    // },[])
    
    
    return(
        <div>
            <DetailFilm film={film}/>
        </div>
    )
}

export default Detail;