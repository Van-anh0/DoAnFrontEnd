import Netflixlogo from '../../assets/images/logoHeader.png'
import {MdSearch} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'

import styled from 'styled-components'
import "../Header/Header.scss"
import {Link} from 'react-router-dom'
import ModalSign from '../modal/modalSignup'
import ModalLog from '../modal/modalLogin'
function Header (props) {
   
    return(
        
            <div className="navContainer">
                <div className="logo">
                    <img src={Netflixlogo} alt="" />
                </div>

                <div className="navSearch">
                    <MdSearch className="iconSearch"/>
                    <input type="text" placeholder="Nhập từ khoá để tìm kiếm phim..." />
                </div>
              
               <div className="end">
                 <div className="login">
                        <AiOutlineUser className="iconUser"/>
                        <ModalSign/>
                </div>
                <div className="login">
                        <AiOutlineUser className="iconUser"/>
                        <ModalLog/>
                </div>
              

                <div className="language">
                    <span className="languageText">VI | EN</span>
                </div>
               </div>
               
            </div>
        
    )
}

export default Header;



