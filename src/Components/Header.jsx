import React from "react";
import {useState} from "react";
import "./Header.css";
import {NavLink} from "react-router-dom";
import LogoImg from "../assets/black-logo.jpg";

const Header = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeNav = () => setClick(false);
	return (
		<header className='header_container'>
			<div className='header_wrapper'>
				<div className='logo'>
					<img src={LogoImg} alt='logo' />
				</div>
				<div
					className={click ? "nav_layOut close" : "nav_layOut"}
					onClick={closeNav}></div>
				<nav className={click ? "mobileNav" : null}>
					<div className='logo'>
						<img src={LogoImg} alt='logo' />
					</div>
					<ul>
						<li onClick={closeNav}>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li onClick={closeNav}>
							<NavLink to='/about'>About Us</NavLink>
						</li>
						<li onClick={closeNav}>
							<NavLink to='/service'>Services</NavLink>
						</li>
						<li onClick={closeNav}>
							<NavLink to='/contact'>Contact Us</NavLink>
						</li>
						<li onClick={closeNav}>
							<NavLink to='/login'>Sign In</NavLink>
						</li>
						<li onClick={closeNav}>
							<NavLink to='/register'>Sign Up</NavLink>
						</li>
						<li onClick={closeNav}>
							<NavLink to='/signout'>Sign Out</NavLink>
						</li>
						<li onClick={closeNav}>
							<NavLink to='/admin'>Admin</NavLink>
						</li>
					</ul>
				</nav>
				<div className='menu' onClick={handleClick}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
