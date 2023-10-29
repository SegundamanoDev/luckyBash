import React from "react";
import "./Service.css";

import {
	ArrowBackIos,
	ArrowForwardIos,
	DirectionsBoatFilledRounded,
	HelpOutlineRounded,
	LocalShippingRounded,
	RecyclingRounded,
	ShoppingCartRounded,
} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Services = () => {
	return (
		<div className='service_container'>
			<div className='service_top' data-aos='fade-up'>
				<h2>WHO WE ARE</h2>
				<h2>SERVICES</h2>
			</div>
			<div className='service_middle'>
				<ul>
					<li data-aos='fade-up'>
						<LocalShippingRounded className='first_sect_icon' />
						<h3>COURIER</h3>
						<p>
							For our same-day service, shipments received before 10:00am are
							guaranteed to be delivered to selected airport cities
						</p>
						<Link to='/services/courier'>READ MORE</Link>
					</li>
					<li data-aos='fade-up'>
						<LocalShippingRounded className='first_sect_icon' />
						<h3>LOGISTICS</h3>
						<p>
							Our Domestic Economy Service has been specifically designed to
							suit both individual and corporate organisations
						</p>
						<Link to='/services/logistics'>READ MORE</Link>
					</li>
					<li data-aos='fade-up'>
						<ShoppingCartRounded className='first_sect_icon' />
						<h3>E- COMMERCE</h3>
						<p>
							Our e-Commerce services can save you time and money in an
							increasingly competitive and fast changing business landscape.
						</p>
						<Link to='/services/e-commerce'>READ MORE</Link>
					</li>
					<li data-aos='fade-up'>
						<DirectionsBoatFilledRounded className='first_sect_icon' />
						<h3>INTERNATIONAL</h3>
						<p>
							Our international express service delivers time sensitive
							documents and parcels nationwide to over 200 countries.
						</p>
						<Link to='/services/international'>READ MORE</Link>
					</li>
					<li data-aos='fade-up'>
						<HelpOutlineRounded className='first_sect_icon' />
						<h3>SPECIALISED SOLUTIONS</h3>
						<p>
							Our customised business solutions can either address your entire
							supply chain or smaller elements within it such
						</p>
						<Link to='/services/specialised-solution'>READ MORE</Link>
					</li>
					<li data-aos='fade-up'>
						<RecyclingRounded className='first_sect_icon' />
						<h3>CUSTOM SOLUTIONS</h3>
						<p>
							Every business has different supply chain challenges; which means
							that standard solutions are rarely effective.
						</p>
						<Link to='/services/custom-solution'>READ MORE</Link>
					</li>
				</ul>
			</div>
			<div className='service_quote'>
				<div className='top' data-aos='fade-up'>
					<h2>
						At FLAWLESS, we understood that most times, the cost of delay in
						logistics far outweigh the cost of the transaction itself.
					</h2>
					<Link to='/about'>Read more</Link>
				</div>
				<div className='bottom'></div>
			</div>
		</div>
	);
};

export default Services;
