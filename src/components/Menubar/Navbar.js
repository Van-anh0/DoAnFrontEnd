import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Trang chủ
          </NavLink>
          <NavLink to="/showtime" activeStyle>
            Lịch chiếu
          </NavLink>
          <NavLink to="/cinema" activeStyle>
            Rạp và giá
          </NavLink>
          <NavLink to="/introduce" activeStyle>
            Giới thiệu
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
