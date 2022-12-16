import React from "react";
import {AiOutlineFieldTime} from "react-icons/ai"
import "../DetailFilm/DetailFilm.scss"
import icon from "../../assets/images/ytb2.png"
import { Link } from "react-router-dom";

function DetailFilm({film, types}){
    console.log("hieuhoccode",types)

    const movie ="https://i.etsystatic.com/27089413/r/il/ddfeb8/2795688212/il_570xN.2795688212_glob.jpg";
    return(

        <div className="detailFilm">
        <div className="col-detailFilm">
                    <div className="Film">
                                <div className="pic">
                                    <img src={film.poster} alt={film.name}></img>
                                </div>

                                <div className="text">
                                <div className="detail">
                                            <h1 className="name">
                                            {film.name}
                                        </h1>
                                        
                                        <span className="tt">Khởi chiếu: </span> <span>{film.release_date}</span><br/>
                                        <span className="tt">Thể loại: </span> <span>{film.type}</span><br/>
                                        <span className="tt">Đạo diễn: </span> <span>{film.director}</span><br/>
                                        <span className="tt">Diễn viên: </span> <span>{film.cast}</span><br/>
                                        <span className="tt">Quốc gia: </span> <span>{film.country}</span><br/>
                                    
                                </div>
                                <div className="content">
                                    <h1>Nội dung phim</h1>
                                <span>{film.description}</span>
                                    </div>
                                

                                </div>

                            
                                
                                
                    </div>
                    <div className="dateTime">
                                                <div className="cinemas">
                                                    <select>
                                            {
                                                   types?.map((type, index) => (
                                                        
                                                            <option>
                                                                <div key={index}> 
                                                                    <div>{type?.name}</div>
                                                                </div>
                                                            </option>
                                                            
                                                        
                                                        
                                                    ))
                                                }
                                                    </select>

                                                    <select>
                                                        <option>05/11/2022</option>
                                                        <option>07/11/2022</option>
                                                    </select>
                                                </div>

                                               
                                                <div className="time">
                                                    <button>09:00</button>
                                                    <button>10:00</button>
                                                    <button>13:00</button>
                                                    <button>15:00</button>
                                                    <button>17:00</button>
                                                    <button>19:00</button>
                                                    <button>21:00</button>
                                                    <button>23:00</button>
                                                
                                                </div>
                        </div>

                        <div className="foo">
                                    <div className="a">
                                            <img src={icon}></img>
                                        <div>TRAILER</div>
                                    </div>
                                
                                    <Link to={"/lichchieu"} onClick={() => {}}>
                                    <div className="b">Mua vé</div>
                                    </Link>
                                   
                                </div>

        </div>
 


     
     </div>
      


           
    )
}

export default DetailFilm;