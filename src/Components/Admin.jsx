import React from "react";
import "./Admin.css";
import {
	Close,
	NoteAltRounded,
	Person,
	Settings,
	SpaceDashboardRounded,
} from "@mui/icons-material";
import {Link, NavLink, Outlet} from "react-router-dom";

const Admin = () => {
	return (
		<div className='admin'>
			<div className='header'>
				<span>
					<SpaceDashboardRounded />
					<NavLink to='/admin/dashboard'>Dashboard</NavLink>
				</span>
				<span>
					<NoteAltRounded />
					<NavLink to='/admin/create-tracking'>Add Tracking</NavLink>
				</span>
				<span>
					<Person />
					<NavLink to='/admin/profile'>Account</NavLink>
				</span>
				<span>
					<Settings />
					<NavLink to='/admin/setting'>Settings</NavLink>
				</span>
				<span>
					<Close />
					<h2>Logout</h2>
				</span>
			</div>
			<div className='admin_contents'>
				<Outlet />
			</div>
		</div>
	);
};

export default Admin;
