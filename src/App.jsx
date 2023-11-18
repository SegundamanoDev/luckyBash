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
import ViewOrder from "./Components/ViewOrder";
import GetTracking from "./Components/GetTracking";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectRoutes from "./Components/ProtectRoutes";
import Notfound from "./Components/Notfound";
import Air from "./Components/Air";
import Road from "./Components/Road";
import Ocean from "./Components/Ocean";

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
				<ToastContainer />
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

					<Route element={<ProtectRoutes />}>
						<Route path='/admin' element={<Admin />}>
							<Route index element={<Dashboard />} />
							<Route path='dashboard' element={<Dashboard />} />
							<Route path='create-tracking' element={<Tracking />} />
							<Route path='profile' element={<Account />} />
						</Route>
					</Route>
					<Route path='/reset-password' element={<ResetPass />} />
					<Route path='/order/:id' element={<ViewOrder />} />
					<Route path='/get-my-order' element={<GetTracking />} />
					<Route path='/update-order/:id' element={<UpdateTrack />} />
					<Route path='/air' element={<Air />} />
					<Route path='/road' element={<Road />} />
					<Route path='/ocean' element={<Ocean />} />
					<Route path='*' element={<Notfound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
