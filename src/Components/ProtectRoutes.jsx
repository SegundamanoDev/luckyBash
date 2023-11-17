import React from "react";
import {useLocation, Outlet, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectRoutes = () => {
	const location = useLocation();
	const {user} = useSelector((state) => state.user);
	return user?.role === "admin" ? (
		<Outlet />
	) : (
		<Navigate to='/' state={{from: location}} replace />
	);
};

export default ProtectRoutes;
