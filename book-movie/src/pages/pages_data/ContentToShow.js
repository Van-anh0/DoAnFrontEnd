import React, {useEffect, useState}  from "react";
import Contents from "../../components/Content/Contents";
function ContentToShow(props){
    const [films, setFilms] = useState([]);
    useEffect(() => {
        fetch('https://van-anh0.github.io/chiTietFilm.json')
        .then(res => 
            {
               return res.json();
            }
        )
        .then(data => {
            setFilms(data);
            console.log(films);
        })
        
    }, [])
    
    return(
        <div>
            <Contents films = {films}/>
        </div>
    )
}

export default ContentToShow;