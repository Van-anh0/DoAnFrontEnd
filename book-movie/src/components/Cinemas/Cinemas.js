import React from "react";
import {AiFillStar} from 'react-icons/ai';
import {VscLocation} from 'react-icons/vsc';
import ci1 from '../../assets/images/ci1.png';
import ci2 from '../../assets/images/ci2.png';
import ci3 from '../../assets/images/ci3.png';
import ci4 from '../../assets/images/ci4.png';
import ci5 from '../../assets/images/ci5.png';
import ci6 from '../../assets/images/ci6.png';
import ci7 from '../../assets/images/ci7.png';
import '../Cinemas/cinemas.scss'
function Cinemas(){
    return(
        <div className="cinemas">

        <div className="titlee">
            <h1>HỆ THỐNG RẠP CHIẾU PHIM</h1>
            <p>Danh sách hệ thống rạp chiếu phim lớn có mặt khắp cả nước</p>
            <div className="line"></div>
        </div>
            
        
       
        <div className="girdCinema">
                <div className="cinema">
                  
                    <img src={ci1}></img>
                  
            
                    <div className="detail">
                        <h1>Cinerstart Đà Lạt</h1>
                        <p>Hệ thống rạp chiếu phim giá rẻ, hiện đại bậc nhất</p>
                        <div className="star">
                                <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                        </div>
                     
                        
                        <div className="location">
                            <div className="inLine">
                                    <VscLocation className="icon"/>
                            </div>
                            
                            <p className= "inLine">6 rạp</p>
                           
                            
                        </div>
                        
                    </div>
                </div>

                <div className="cinema">
                    
                            <img src={ci2}></img>
                   
            
                            <div className="detail">
                        <h1>CGV</h1>
                        <p>Hệ thống rạp chiếu phim lớn nhất Việt Nam
                        </p>
                        <div className="star">
                                <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                        </div>
                     
                        
                        <div className="location">
                            <div className="inLine">
                                    <VscLocation className="icon"/>
                            </div>
                            
                            <p className= "inLine">86 rạp</p>
                           
                            
                        </div>
                        
                    </div>
                </div>

                <div className="cinema">
                
                    <img src={ci3}></img>
                    
            
                    <div className="detail">
                        <h1>Lotte Cinema</h1>
                        <p>Hệ thống rạp chiếu phim từ hàn quốc
                        </p>
                        <div className="star">
                                <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                        </div>
                     
                        
                        <div className="location">
                            <div className="inLine">
                                    <VscLocation className="icon"/>
                            </div>
                            
                            <p className= "inLine">48 rạp</p>
                           
                            
                        </div>
                        
                     </div>
                </div>

                <div className="cinema">
                  
                            <img src={ci4}></img>
                    
            
                            <div className="detail">
                        <h1>Galaxy Cinema</h1>
                        <p> Mang Hollywood đến gần bạn</p>
                        <div className="star">
                                <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                        </div>
                     
                        
                        <div className="location">
                            <div className="inLine">
                                    <VscLocation className="icon"/>
                            </div>
                            
                            <p className= "inLine">18 rạp</p>
                           
                            
                        </div>
                        
                    </div>
                </div>

                <div className="cinema">
                    
                            <img src={ci5}></img>
                    
            
                            <div className="detail">
                        <h1>Beta Cinemas</h1>
                        <p>Rạp chiếu phim Beta Cinemas</p>
                        <div className="star">
                                <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                        </div>
                     
                        
                        <div className="location">
                            <div className="inLine">
                                    <VscLocation className="icon"/>
                            </div>
                            
                            <p className= "inLine">17 rạp</p>
                           
                            
                        </div>
                        
                     </div>
                </div>

                <div className="cinema">
                    <div className="logo">
                            <img src={ci6}></img>
                    </div>
            
                    <div className="detail">
                        <h1>BHD Start</h1>
                        <p>Hệ thống rạp chiếu phim từ hàn quốc
                         </p>
                        <div className="star">
                                <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                        </div>
                     
                        
                        <div className="location">
                            <div className="inLine">
                                    <VscLocation className="icon"/>
                            </div>
                            
                            <p className= "inLine">48 rạp</p>
                           
                            
                        </div>
                        
                    </div>
                </div>
        </div>

        </div>
       
    )
}

export default Cinemas;