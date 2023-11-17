import React, {useEffect, useState} from "react";
import "./Header.css";
import {Link, NavLink, useNavigate} from "react-router-dom";
import whiteLogo from "../assets/whitelogo.jpg";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../Redux/slices/userSlice";
import {Avatar} from "@mui/material";

const Header = () => {
	const [click, setClick] = useState(false);
	const [show, setShow] = useState(false);
	const [hideNav, setHideNav] = useState(false);
	const [sideDropDown, setSideDropDown] = useState(false);

	const {user} = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSideDrop = () => {
		setSideDropDown(!sideDropDown);
	};

	const showDrop = () => {
		setShow(true);
	};
	const hideDrop = () => {
		setShow(false);
	};

	const handleClick = () => {
		setClick(!click);
		setSideDropDown(false);
	};
	const handleLogOut = async () => {
		const result = await dispatch(logOut());
		if (result) {
			navigate("/");
		}
	};

	// const handleNavHide = () => {
	// 	if (window.scrollY > 100) {
	// 		setHideNav(true);
	// 	} else {
	// 		if (window.scrollY < 10) {
	// 			setHideNav(false);
	// 		}
	// 	}
	// };

	// useEffect(() => {
	// 	window.addEventListener("scroll", handleNavHide);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleNavHide);
	// 	};
	// }, []);
	return (
		<div className={hideNav ? "header_container hideNav" : "header_container"}>
			<div className='header_wrapper'>
				<div
					className={click ? "overlay openOverlay" : "overlay"}
					onClick={handleClick}></div>
				<div className='logo'>
					<img src={whiteLogo} alt='logo' />
				</div>
				<nav>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/about'>About Us</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>Contact Us</NavLink>
						</li>
						<li
							className='dropDown_parent'
							onMouseEnter={showDrop}
							onMouseLeave={hideDrop}>
							<NavLink to='/services'>Service</NavLink>
							<div
								className={
									show ? "dropDown_contents showContents" : "dropDown_contents"
								}>
								<NavLink to='/services/courier' onClick={hideDrop}>
									Courier
								</NavLink>
								<NavLink to='/services/logistics' onClick={hideDrop}>
									Logistics
								</NavLink>
								<NavLink to='/services/e-commerce' onClick={hideDrop}>
									E- Commerce
								</NavLink>
								<NavLink to='/services/international' onClick={hideDrop}>
									International
								</NavLink>
								<NavLink to='/services/specialised-solution' onClick={hideDrop}>
									Specialized Solution
								</NavLink>
								<NavLink to='/services/custom-solution' onClick={hideDrop}>
									Custom Solution
								</NavLink>
							</div>
						</li>
						<li>
							<NavLink to='/get-my-order'>Tracking</NavLink>
						</li>

						{user?.role === "admin" && (
							<li className='admin-ava'>
								<NavLink to='/admin'>Admin</NavLink>
							</li>
						)}
						{!user && (
							<>
								<li>
									<NavLink to='/register'>Sign Up</NavLink>
								</li>
								<li>
									<NavLink to='/login'>Sign In</NavLink>
								</li>
							</>
						)}
					</ul>
				</nav>
				<div className='menuButton' onClick={handleClick}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				{/* mini nav */}

				<div className={click ? "miniNav openNav" : "miniNav"}>
					<ul>
						<li>
							<NavLink to='/' onClick={handleClick}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='/about' onClick={handleClick}>
								About Us
							</NavLink>
						</li>
						<li>
							<NavLink to='/contact' onClick={handleClick}>
								Contact Us
							</NavLink>
						</li>
						<li>
							<NavLink to='/services' onClick={handleSideDrop}>
								Services
							</NavLink>
							{sideDropDown && (
								<div className='sideDrop'>
									<NavLink to='/services/courier' onClick={handleClick}>
										Courier
									</NavLink>
									<NavLink to='/services/logistics' onClick={handleClick}>
										Logistics
									</NavLink>
									<NavLink to='/services/e-commerce' onClick={handleClick}>
										E- Commerce
									</NavLink>
									<NavLink to='/services/international' onClick={handleClick}>
										International
									</NavLink>
									<NavLink
										to='/services/specialised-solution'
										onClick={handleClick}>
										Specialized Solution
									</NavLink>
									<NavLink to='/services/custom-solution' onClick={handleClick}>
										Custom Solution
									</NavLink>
								</div>
							)}
						</li>
						<li>
							<NavLink to='/get-my-order' onClick={handleClick}>
								Tracking
							</NavLink>
						</li>
						{user?.role === "admin" && (
							<li className='ad-ava' onClick={handleClick}>
								<NavLink to='/admin'>Admin</NavLink>
							</li>
						)}
						{user ? (
							<>
								<li>
									<Link onClick={handleLogOut}>LogOut</Link>
								</li>
							</>
						) : (
							<>
								<li onClick={handleClick}>
									<NavLink to='/register'>Sign Up</NavLink>
								</li>
								<li onClick={handleClick}>
									<NavLink to='/login'>Sign In</NavLink>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
