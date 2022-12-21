import React from "react";
import "./ListFilm.scss"
import { Link } from "react-router-dom";
const movie = "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/y/_/y_u_qu_i_to_n_th_-_payoff_poster_-_kt_facebook_-_kc_04112022_1_.jpg";
function ListFilm(){
    return(
        <div>
             <div className="dateTime">
                            <div className="cinemas">
                                <select>
                                    <option>Cinetar Đà Lạt</option>
                                    <option>Cinetar Huế</option>
                                    <option>Cinetar Mĩ Tho</option>
                                    <option>Cinetar Kiên Giang</option>
                                </select>
                            </div>

                            <div className="date">
                            <select>
                                    <option>12/01/2021</option>
                                    <option>13/01/2021</option>
                               
                                </select>
                            </div>
                      
            </div>
            <div className="listFilm">
            
                     <div className="film">
                     <Link to={"/detail/5"} onClick={() => {}}>

                         <div className="filmDT">
                            <div className="pic">
                                <img src={movie} alt="yêu quái toàn thư"></img>
                            </div>
                        
                            <div className="detail">
                                <h1>YÊU QUÁI TOÀN THƯ</h1>
                                <p>
                                Cuốn sách cấm "The Haunted Book" có thể biến bất kỳ điều ước nào thành hiện thực, nhưng để biến điều ước thành hiện thực thì bạn phải trải qua một thử thách nguy hiểm đến tính mạng. Thử thách là gì ...!?
                                </p>
                            </div>
                        </div>
                     </Link>
                       
                    

                       
                    </div>

                 

                    
                    

               
             
                
            </div>
               
        </div>
    )
}

export default ListFilm;