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
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Courier from "./Components/Courier";
import Logistics from "./Components/Logistics";
import Commerce from "./Components/Commerce";
import International from "./Components/International";
import Specialised from "./Components/Specialised";
import Custom from "./Components/Custom";

const App = () => {
	useEffect(() => {
		Aos.init({
			once: true,
			duration: "1500",
			delay: "100",
			easing: "ease",
		});
	}, []);
	return (
		<div className='app_container'>
			<BrowserRouter>
				<ScrollToTop />
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/services' element={<Service />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/services/courier' element={<Courier />} />
					<Route path='/services/logistics' element={<Logistics />} />
					<Route path='/services/e-commerce' element={<Commerce />} />
					<Route path='/services/international' element={<International />} />
					<Route
						path='/services/specialised-solution'
						element={<Specialised />}
					/>
					<Route path='/services/custom-solution' element={<Custom />} />
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
