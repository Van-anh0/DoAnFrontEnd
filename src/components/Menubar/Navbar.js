import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Trang chủ
		</NavLink>
		<NavLink to='/showtimes' activeStyle>
			Lịch chiếu
		</NavLink>
		<NavLink to='/cinema' activeStyle>
			Rạp và giá
		</NavLink>
		<NavLink to='/introduce' activeStyle>
			Giới thiệu
		</NavLink>

		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
