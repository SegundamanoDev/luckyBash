import React from "react";
import "./Sidebar.css";
import {NavLink} from "react-router-dom";

const Sidebar = ({click}) => {
	return (
		<div className={click ? "sidebar openSidebar" : "sidebar"} click={click}>
			<nav>
				<div className='logo'>
					<h2>FLAWLESS</h2>
				</div>
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
					<li>
						<NavLink to='/service'>Services</NavLink>
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
		</div>
	);
};

export default Sidebar;
