import React, { useState, useEffect } from "react";
import "../Header/Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { getListMovie } from "redux/search/searchSlice";
import { selectIsAuthenticated, logout } from "redux/user/userSlice";
import { FaHome } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import ModalLogin from "components/Modal/Login/ModalLogin";
import ModalRegister from "components/Modal/Register/ModalRegister";
import {
  selectCurrentSearch,
  clearCurrentSearch,
} from "redux/search/searchSlice";

function Header() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const currentSearch = useSelector(selectCurrentSearch);
  const dispatch = useDispatch();
  const [search, setSearch] = useState([]);

  const [isItem, setIsItem] = useState("phim");

  function handleOnClick(item) {
    setIsItem(item);
  }

  useEffect(() => {
    // get 5 item search
    if (currentSearch?.data) {
      setSearch(currentSearch?.data.slice(0, 5));
    } else {
      setSearch([]);
    }
  }, [currentSearch]);

  const handleChangeSearch = (e) => {
    dispatch(getListMovie(e.target.value));
    setShowSearch(true);
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

  function handleBlurSearch(e) {
    setTimeout(() => {
      dispatch(clearCurrentSearch());
      setShowSearch(false);
      e.target.value = "";
    }, 100);
  }

  function handleClickUser() {
    alert("Bạn đã đăng nhập");
    // redirect to user page
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
            <input
              placeholder="Tìm kiếm..."
              onChange={handleChangeSearch}
              onBlur={handleBlurSearch}
            ></input>
            {showSearch ? (
              <div className="header_top__search__result">
                {search.length > 0 ? (
                  search.map((item) => (
                    <div
                      className="header_top__search__result__item"
                      key={item.id}
                    >
                      <Link to={`detail/${item.id}`}>
                        <img src={item.poster}></img>
                        <span>{item.name}</span>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="header_top__search__result__item">
                    <span>Không tìm thấy phim</span>
                  </div>
                )}
              </div>
            ) : (
              <div></div>
            )}
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
                <span className="avatar" onClick={handleClickUser}>
                  <img src="https://i.pinimg.com/originals/5e/97/dd/5e97dd8e1924f715fb6f59d27e43194d.png"></img>
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
          <div className="header_top_cart">
            <Link to="/cart">
              <BsCart2 />
            </Link>
          </div>
        </div>
        <div className="header_bot">
          <div className="header_bot__logo">
            <Link to="/">
              <img src="https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png"></img>
            </Link>
          </div>
          <div className="header_bot__menu">
            <div className="header_bot__home">
              <Link to="/">
                <FaHome />
              </Link>
            </div>
            <div className="header_bot__nav">
              <ul>
                <Link
                  to="/"
                  onClick={() => handleOnClick("phim")}
                  className={isItem === "phim" ? "li-active" : "li-not-active"}
                >
                  Phim
                </Link>
                <Link
                  to="/showtime"
                  onClick={() => handleOnClick("lichchieu")}
                  className={
                    isItem === "lichchieu" ? "li-active" : "li-not-active"
                  }
                >
                  Lịch chiếu
                </Link>
                <Link
                  to="/cinema"
                  onClick={() => handleOnClick("rapvagia")}
                  className={
                    isItem === "rapvagia" ? "li-active" : "li-not-active"
                  }
                >
                  Rạp và giá
                </Link>
                <Link
                  onClick={() => handleOnClick("khuyenmai")}
                  className={
                    isItem === "khuyenmai" ? "li-active" : "li-not-active"
                  }
                  to="/promotion"
                >
                  Khuyến mãi
                </Link>
                <Link
                  onClick={() => handleOnClick("hoivadap")}
                  className={
                    isItem === "hoivadap" ? "li-active" : "li-not-active"
                  }
                  to="/question"
                >
                  Hỏi và đáp
                </Link>
                <Link
                  onClick={() => handleOnClick("tintuc")}
                  className={
                    isItem === "tintuc" ? "li-active" : "li-not-active"
                  }
                  to="/newfeed"
                >
                  Tin tức
                </Link>
                <Link
                  onClick={() => handleOnClick("gioithieu")}
                  className={
                    isItem === "gioithieu" ? "li-active" : "li-not-active"
                  }
                  to="/introduce"
                >
                  Giới thiệu
                </Link>
                <Link
                  onClick={() => handleOnClick("lienhe")}
                  className={
                    isItem === "lienhe" ? "li-active" : "li-not-active"
                  }
                  to="/contact"
                >
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
