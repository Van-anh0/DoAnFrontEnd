import React, {useEffect, useState}  from "react";
import Contents from "../../components/Content/Contents";
import {getListMovie} from "../../actions/ApiCall/index";
function ContentToShow(props){
    const [films, setFilms] = useState([]);
    useEffect(() => {
        // fetch('https://van-anh0.github.io/chiTietFilm.json')
        // .then(res => 
        //     {
        //        return res.json();
        //     }
        // )
        // .then(data => {
        //     setFilms(data);
        //     console.log(films);
        // })

          
        // call API checkHealth
           // console.log("chuan bi call")
            let response = getListMovie()
            response.then((result) => {
                   // console.log(result)
                    setFilms(result.data)
                  //  console.log("phim ne", films)
            })
      
        
    }, [])
    
    return(
        <div>
            
            <Contents films = {films}/>
        </div>
    )
}

export default ContentToShow;