import React from "react";
import {AiOutlineFieldTime} from "react-icons/ai"
import "../DetailFilm/DetailFilm.scss"
import icon from "../../assets/images/ytb2.png"
import { Link } from "react-router-dom";

function DetailFilm(props){

    const movie ="https://i.etsystatic.com/27089413/r/il/ddfeb8/2795688212/il_570xN.2795688212_glob.jpg";
    return(

        <div className="detailFilm">
        <div className="col-detailFilm">
                    <div className="Film">
                                <div className="pic">
                                    <img src={props.film.Poster} alt={props.film.Title}></img>
                                </div>

                                <div className="text">
                                <div className="detail">
                                            <h1 className="name">
                                            {props.film.Title}
                                        </h1>
                                        
                                        <span className="tt">Khởi chiếu: </span> <span>{props.film.Released}</span><br/>
                                        <span className="tt">Thể loại: </span> <span>{props.film.Genre}</span><br/>
                                        <span className="tt">Đạo diễn: </span> <span>{props.film.Director}</span><br/>
                                        <span className="tt">Diễn viên: </span> <span>{props.film.Actors}</span><br/>
                                        <span className="tt">Quốc gia: </span> <span>{props.film.Country}</span><br/>
                                    
                                </div>
                                <div className="content">
                                    <h1>Nội dung phim</h1>
                                <span>{props.film.Plot}</span>
                                    </div>
                                

                                </div>

                            
                                
                                
                    </div>
                    <div className="dateTime">
                                                <div className="cinemas">
                                                    <select>
                                                        <option>Cinetar Đà Lạt</option>
                                                        <option>Cinetar Huế</option>
                                                        <option>Cinetar Mĩ Tho</option>
                                                        <option>Cinetar Kiên Giang</option>
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