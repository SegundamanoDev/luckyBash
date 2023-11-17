import React from "react";
import "./Admin.css";
import {
	Close,
	NoteAltRounded,
	Person,
	Settings,
	SpaceDashboardRounded,
} from "@mui/icons-material";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {logOut} from "../Redux/slices/userSlice";
import {useDispatch} from "react-redux";

const Admin = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogOut = async () => {
		const result = await dispatch(logOut());
		if (result) {
			navigate("/");
		}
	};
	return (
		<div className='admin'>
			<div className='header'>
				<span>
					<SpaceDashboardRounded className='dashB-icon' />
					<NavLink to='/admin/dashboard'>Dashboard</NavLink>
				</span>
				<span>
					<NoteAltRounded className='dashB-icon' />
					<NavLink to='/admin/create-tracking'>Tracking</NavLink>
				</span>
				<span>
					<Person className='dashB-icon' />
					<NavLink to='/admin/profile'>Account</NavLink>
				</span>
				<span>
					<Close className='dashB-icon' />
					<Link onClick={handleLogOut}>Logout</Link>
				</span>
			</div>
			<div className='admin_contents'>
				<Outlet />
			</div>
		</div>
	);
};

export default Admin;
