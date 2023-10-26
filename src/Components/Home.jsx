import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import {
	LocalShippingRounded,
	FlightTakeoff,
	DirectionsBoatRounded,
	ShoppingCartRounded,
	OfflineBoltRounded,
	RecyclingRounded,
	CheckCircleRounded,
	Person4Rounded,
	NoteAltRounded,
	MailRounded,
	FlutterDashRounded,
	GradeRounded,
} from "@mui/icons-material";

const Home = () => {
	const [happyClient, setHappyClient] = useState(0);
	const [customerReview, setCustomerReview] = useState(0);
	const [completeShipping, setCompleteShipping] = useState(0);
	const [trackNumberId, setTrackNumberId] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			if (happyClient < 968) {
				setHappyClient(happyClient + 1);
			}
		}, 70);
		return () => clearInterval(interval);
	}, [happyClient]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (completeShipping < 968) {
				setCompleteShipping(completeShipping + 1);
			}
		}, 70);
		return () => clearInterval(interval);
	}, [completeShipping]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (customerReview < 5000) {
				setCustomerReview(customerReview + 1);
			}
		}, 70);
		return () => clearInterval(interval);
	}, [customerReview]);
	const submitTrackNumber = (e) => {
		e.preventDefault();
	};
	return (
		<div className='home_container'>
			<div className='banner'>
				<div className='banner_contents'>
					<p>
						WELCOME TO <br /> Flawless Logistics <br /> Expect the best from us
					</p>
					<div className='buttons'>
						<Link className='banner_signup' to='/signup'>
							Register
						</Link>
						<Link className='banner_signin' to='/signin'>
							Login
						</Link>
					</div>
				</div>

				<div className='banner_shipment_mode_container'>
					<div className='banner_shipping_mode'>
						<span>
							{" "}
							<LocalShippingRounded className='banner_icons' />
							<p>Road Freight</p>
						</span>
						<p>Secure and timely road Cargo Handling</p>
					</div>
					<div className='banner_shipping_mode'>
						<span>
							{" "}
							<FlightTakeoff className='banner_icons' />
							<p>Air Freight</p>
						</span>
						<p>Secure and timely road Cargo Handling</p>
					</div>
					<div className='banner_shipping_mode'>
						<span>
							{" "}
							<DirectionsBoatRounded className='banner_icons' />
							<p>Ocean Freight</p>
						</span>
						<p>Efficient Ocean Freight Logistics Provider</p>
					</div>
				</div>
			</div>
			<div className='trackNUmber_inp_container'>
				<form onSubmit={submitTrackNumber}>
					<input
						type='text'
						name='track'
						id='track'
						placeholder='Enter your tracking number...'
						value={trackNumberId}
						onChange={(e) => setTrackNumberId(e.target.value)}
					/>
					<button type='submit'>Track</button>
				</form>
			</div>
			<div className='company_service_container'>
				<h3 className='company_h3'>
					You have a need, we <br /> have the{" "}
					<span className='colution'>SOLUTION</span>
				</h3>
				<div className='company_services'>
					<div className='services_details'>
						<LocalShippingRounded className='services_icons' />
						<p className='services_heading'>COURIER</p>
						<p className='services_desc'>
							For our same-day service, shipments received before 10:00am are
							guaranteed to be delivered to selected airport cities
						</p>
						<Link to=''>READ MORE</Link>
					</div>
					<div className='services_details'>
						<LocalShippingRounded className='services_icons' />
						<p className='services_heading'>LOGISTICS</p>
						<p className='services_desc'>
							Our Domestic Economy Service has been specifically designed to
							suit both individual and corporate organizations
						</p>
						<Link to=''>READ MORE</Link>
					</div>
					<div className='services_details'>
						<ShoppingCartRounded className='services_icons' />
						<p className='services_heading'>E- COMMERCE</p>
						<p className='services_desc'>
							Our e-Commerce services can save you time and money in an
							increasingly competitive and fast changing business landscape.
						</p>
						<Link to=''>READ MORE</Link>
					</div>
					<div className='services_details'>
						<DirectionsBoatRounded className='services_icons' />
						<p className='services_heading'>INTERNATIONAL</p>
						<p className='services_desc'>
							Our international express service delivers time sensitive
							documents and parcels nationwide to over 200 countries.
						</p>
						<Link to=''>READ MORE</Link>
					</div>
					<div className='services_details'>
						<OfflineBoltRounded className='services_icons' />
						<p className='services_heading'>SPECIALIZED SOLUTIONS</p>
						<p className='services_desc'>
							Our customized business solutions can either address your entire
							supply chain or smaller elements within it such
						</p>
						<Link to=''>READ MORE</Link>
					</div>
					<div className='services_details'>
						<RecyclingRounded className='services_icons' />
						<p className='services_heading'>CUSTOM SOLUTIONS</p>
						<p className='services_desc'>
							Every business has different supply chain challenges; which means
							that standard solutions are rarely effective.
						</p>
						<Link to=''>READ MORE</Link>
					</div>
				</div>
			</div>
			<div className='someFact'>
				<div className='left_side'>
					<div className='left_top'>
						<h2>SOME FACTS</h2>
						<span>#1 Place To Manage All Of Your Shipments</span>
					</div>
					<p>
						At Flawless Logistics, we understand that time is of the essence in
						today's fast-paced business world. that's why we prioritized on-time
						delivery, ensuring that your shipments reaches their destination
						promptly and safety
					</p>
					<div className='left_cont_info'>
						<MailRounded />
						<span>
							<p>Email for any inquiry</p>
							<p>flawless@gmail.com</p>
						</span>
					</div>
				</div>
				<div className='right_side'>
					<div className='right_content'>
						<FlutterDashRounded className='happyClient_icons' />
						<h2>{happyClient}</h2>
						<p>Happy Client</p>
					</div>
					<div className='right_content'>
						<DirectionsBoatRounded className='happyClient_icons' />
						<h2>{completeShipping}</h2>
						<p>Complete Shipment</p>
					</div>
					<div className='right_content'>
						<GradeRounded className='happyClient_icons' />
						<h2>{customerReview}</h2>
						<p>Customer Review</p>
					</div>
				</div>
			</div>
			<div className='inquiry_sections'>
				<div className='inq_left'>
					<p className='inq_fst_p'>
						Unbeatable Tracking and Transport Services
					</p>
					<p>
						At flawless logistics we take great price in offering unbeatable
						tracking and transport services that are designed to meet all your
						logistics needs. With our commitment to excellent and customer{" "}
						<strong>Satisfaction</strong> we have established ourselves as
						trusted name in the industry
					</p>
				</div>
				<div className='inq_right'>
					<div className='right_contents'>
						<Person4Rounded className='inq_icon' />
						<p>Tell Friend</p>
					</div>
					<div className='right_contents'>
						<NoteAltRounded className='inq_icon' />
						<p>Read More</p>
					</div>
					<div className='right_contents'>
						<MailRounded className='inq_icon' />
						<p>Contact Us</p>
					</div>
				</div>
			</div>
			<div className='keyFeatures_section'>
				<div className='inquiry_left'>
					<p className='key_f_text'>KEY FEATURES</p>
					<div className='group_items'>
						<CheckCircleRounded className='check_icon' />
						<p className='key_h_text'>100% Safe Delivery</p>
						<p>
							We pride on being the only indigenous logistics provider that has
							the vision, capacity and world class client service culture that
							can rival any international brand.
						</p>
					</div>
					<div className='group_items'>
						<CheckCircleRounded className='check_icon' />
						<p className='key_h_text'>Fast & On Time</p>
						<p>
							We understand that most times, the costs for delays in logistics
							far outweigh the cost of the transaction itself. Therefore, we
							have invested in acquiring robust technology, infrastructure and
							hiring people who continuously deliver on time, every time.
						</p>
					</div>
				</div>
				<div className='inquiry_right'>
					<p className='key_about_text'>ABOUT US</p>
					<div className='right_wrapper'>
						<p className='key_right_desc1'>
							Between the point of departure and destination there is FLAWLESS
							DELIVERY
						</p>
						<p className='key_right_desc2'>
							Flawless is a provider of end-to-end logistics solutions to
							businesses and institutions across the World.
						</p>
						<p className='key_right_desc3'>
							when you need a fast and reliable logistics service providers we
							are present. Flawless has been in the distribution and logistics
							business since 2009.
						</p>
					</div>
				</div>
			</div>
			<div className='more_section'>
				<p>
					Looking for more? <br /> Here are a few places to explore.
				</p>
				<div className='more_links'>
					<Link to='/about'>About Us</Link>
					<Link to='/international'>Import Service</Link>
					<Link to='/service'>Same Day Delivery</Link>
					<Link to='/contact'>Contact Us</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
