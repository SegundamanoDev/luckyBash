import React, {useEffect} from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ResetPass from "./Components/ResetPass";
import Admin from "./Components/Admin";
import Tracking from "./Components/Tracking";
import Account from "./Components/Account";
import Dashboard from "./Components/Dashboard";
import Settings from "./Components/Settings";
import UpdateTrack from "./Components/UpdateTrack";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
	useEffect(() => {
		Aos.init({
			once: true,
			duration: "1700",
			delay: "200",
			// offset: 100,
			easing: "ease-in-out",
		});
	}, []);
	return (
		<div className='app_container'>
			<BrowserRouter>
				<ScrollToTop />
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/admin' element={<Admin />}>
						<Route path='dashboard' element={<Dashboard />} />
						<Route path='create-tracking' element={<Tracking />} />
						<Route path='update-tracking' element={<UpdateTrack />} />
						<Route path='profile' element={<Account />} />
						<Route path='setting' element={<Settings />} />
					</Route>
					<Route path='/reset-password' element={<ResetPass />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
