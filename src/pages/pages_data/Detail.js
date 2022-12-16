import React, {useEffect, useState}  from "react";
import { getListMovieTheater, getOneMovie } from "../../actions/ApiCall";
import DetailFilm from "../../components/DetailFilm/DetailFilm";
import Header from "../../components/Header/Header";
import {useLocation} from "react-router-dom"
function Detail(){
    const [film, setFilm] = useState({});
    const [types, setTypes] = useState([]);
    const pathname = useLocation().pathname
    let id = pathname.replace('/detail/', '')
        // const filmId = new URLSearchParams(pathname);
    useEffect(() => {
        // fetch('https://van-anh0.github.io/chiTietFilm.json')
        // .then(x => x.json())
        // .then(y => {
        //     console.log(y[0]);
        //     setFilm(y[props.filmId])
        // });
        
        let response = getOneMovie(id)
        response.then((result) => {
                setFilm(result.data)
              //  console.log("phim ne", films)
        })


        
        let responseType = getListMovieTheater()
        responseType.then((result) => {
                setTypes(result.data)
              
        })

    }, [])


   
    
    return(
        <div>
            <DetailFilm film={film} types={types}/>
        </div>
    )
}

export default Detail;