import React, {useState} from "react";
import "./Header.css";
import {NavLink} from "react-router-dom";
// import whiteLogo from "../assets/whitelogo.jpg";

const Header = () => {
	const [click, setClick] = useState(false);
	const [show, setShow] = useState(false);
	const [sideDropDown, setSideDropDown] = useState(false);

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
	return (
		<div className='header_container'>
			<div className='header_wrapper'>
				<div
					className={click ? "overlay openOverlay" : "overlay"}
					onClick={handleClick}></div>
				<div className='logo'>
					{/* <img src={whiteLogo} alt='logo' /> */}
					<h2>FLAWLESS</h2>
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
							<NavLink to='/carrier'>Carrier</NavLink>
						</li>
						<li>
							<NavLink to='/register'>Sign Up</NavLink>
						</li>
						<li>
							<NavLink to='/login'>Sign In</NavLink>
						</li>
						<li>
							<NavLink to='/admin'>Admin</NavLink>
						</li>
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
							<NavLink to='/carrier' onClick={handleClick}>
								Carrier
							</NavLink>
						</li>
						<li>
							<NavLink to='/register' onClick={handleClick}>
								Sign Up
							</NavLink>
						</li>
						<li>
							<NavLink to='/login' onClick={handleClick}>
								Sign In
							</NavLink>
						</li>
						<li>
							<NavLink to='/admin' onClick={handleClick}>
								Admin
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
