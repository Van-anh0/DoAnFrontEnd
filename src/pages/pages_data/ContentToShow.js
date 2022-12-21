import React, {useEffect, useState}  from "react";
import Contents from "../../components/Content/Contents";
import {getListMovie} from "../../actions/ApiCall/index";
function ContentToShow(props){
    const [films, setFilms] = useState([]);
    useEffect(() => {
            let response = getListMovie()
            response.then((result) => {
                    setFilms(result.data)
            })
    }, [])
    
    return(
        <div>
            
            <Contents films = {films}/>
        </div>
    )
}

export default ContentToShow;