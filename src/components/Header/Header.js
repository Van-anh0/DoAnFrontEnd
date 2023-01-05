import React, { useState } from "react";
import "../Header/Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "redux/search/searchSlice";
import { selectIsAuthenticated, logout } from "redux/user/userSlice";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalLogin from "components/Modal/Login/ModalLogin";
import ModalRegister from "components/Modal/Register/ModalRegister";

function Header() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const handleChangeSearchText = (e) => {
    dispatch(updateSearch(e.target.value));
  };

  function handleLogout() {
    dispatch(logout());
    alert("Đăng xuất thành công");
  }

  function handleClickLogin() {
    setShowModalLogin(!showModalLogin);
  }

  function handleClickRegister() {
    setShowModalRegister(!showModalRegister);
  }

  return (
    <div className="header">
      {showModalLogin ? (
        <ModalLogin handleClickLogin={handleClickLogin} />
      ) : (
        <></>
      )}
      {showModalRegister ? (
        <ModalRegister handleClickRegister={handleClickRegister} />
      ) : (
        <></>
      )}
      <div className="nav">
        <div className="header_top">
          <div className="header_top__search">
            <input placeholder="Tìm kiếm..."></input>
          </div>
          {!isAuthenticated ? (
            <>
              <div className="header_top__button">
                <button onClick={() => handleClickLogin()}>Đăng nhập</button>
              </div>
              <div className="header_top__button">
                <button onClick={() => handleClickRegister()}>Đăng ký</button>
              </div>
            </>
          ) : (
            <>
              <div className="header_top__button">
                <span>
                  <img src="https://khoinguonsangtao.vn/wp-content/uploads/2022/06/avatar-facebook-nu-tao-ky-hieu-tay-1.png"></img>
                </span>
              </div>
              <div className="header_top__button">
                <button onClick={() => handleLogout()}>Đăng xuất</button>
              </div>
            </>
          )}

          <div className="header_top__language">
            <a>En</a>
          </div>
        </div>
        <div className="header_bot">
          <div className="header_bot__logo">
            <img src="https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png"></img>
          </div>
          <div className="header_bot__menu">
            <div className="header_bot__home">
              <Link to="/">
                <FaHome />
              </Link>
            </div>
            <div className="header_bot__nav">
              <ul>
                <Link className="li" to="/">
                  Phim
                </Link>
                <Link className="li" to="/showtime">
                  Lịch chiếu
                </Link>
                <Link className="li" to="/cinema">
                  Rạp và giá
                </Link>
                <Link className="li" to="/promotion">
                  Khuyến mãi
                </Link>
                <Link className="li" to="/question">
                  Hỏi và đáp
                </Link>
                <Link className="li" to="/newfeed">
                  Tin tức
                </Link>
                <Link className="li" to="/introduce">
                  Giới thiệu
                </Link>
                <Link className="li" to="/contact">
                  Liên hệ
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
