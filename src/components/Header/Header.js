import React  from 'react'
import Netflixlogo from '../../assets/images/logoHeader.png'
import {MdSearch} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
// import styled from 'styled-components'
import "../Header/Header.scss"
// import {Link} from 'react-router-dom'
import ModalSign from '../Modal/ModalSignup'
import ModalLog from '../Modal/ModalLogin'
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentSearch, updateSearchTextOfRedux } from "../../redux/searchText/searchTextSlice";
function Header (props) {
    const searchText = useSelector(selectCurrentSearch);
    console.log(searchText)
    const dispatch = useDispatch();

    const handleChangeSearchText = (e)=> {
        dispatch(updateSearchTextOfRedux(e.target.value));
    }

    return(
        
            <div className="navContainer">
                <div className="logo">
                    <img src={Netflixlogo} alt="" />
                </div>

                <div className="navSearch">
                    <MdSearch className="iconSearch"/>
                    <input type="text" placeholder="Nhập từ khoá để tìm kiếm phim..." 
                    
                    onChange={handleChangeSearchText}/>
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



