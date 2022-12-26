import React from "react";
import Netflixlogo from "assets/images/logoHeader.png";
import { MdSearch } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import "../Header/Header.scss";
import ModalSign from "../Modal/ModalSignup";
import ModalLog from "../Modal/ModalLogin";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentSearch,
  updateSearch,
} from "redux/search/searchSlice";
import { selectIsAuthenticated } from "redux/user/userSlice";

function Header() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const handleChangeSearchText = (e) => {
    dispatch(updateSearch(e.target.value));
  };

  return (
    <div className="navContainer">
      <div className="logo">
        <img src={Netflixlogo} alt="" />
      </div>

      <div className="navSearch">
        <MdSearch className="iconSearch" />
        <input
          type="text"
          placeholder="Nhập từ khoá để tìm kiếm phim..."
          onChange={handleChangeSearchText}
        />
      </div>

      <div className="end">
        {!isAuthenticated ? (
          <>
            <div className="login">
              <AiOutlineUser className="iconUser" />
              <ModalSign />
            </div>
            <div className="login">
              <AiOutlineUser className="iconUser" />
              <ModalLog />
            </div>
          </>
        ) : (
          <>
            <div>Chỗ này hiển thị avatar</div>
            <div>Chỗ này là nút đăng xuất</div>
          </>
        )}

        <div className="language">
          <span className="languageText">VI | EN</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
