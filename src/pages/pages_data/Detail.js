import React, {useEffect, useState}  from "react";
import DetailFilm from "../../components/DetailFilm/DetailFilm";
import Header from "../../components/Header/Header";
function Detail(props){
    const [film, setFilm] = useState([]);
    useEffect(() => {
        fetch('https://van-anh0.github.io/chiTietFilm.json')
        .then(x => x.json())
        .then(y => {
            console.log(y[0]);
            setFilm(y[props.filmId])
        });
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