import React from "react";
import "./International.css";
import {Link} from "react-router-dom";
import {CheckCircleOutlineRounded} from "@mui/icons-material";

const International = () => {
	return (
		<div className='international_container'>
			<div className='international_top' data-aos='zoom-in'>
				<h2>WHO WE ARE</h2>
				<h2>INTERNATIONAL</h2>
			</div>
			<div className='left_wrapper'>
				<div className='left_top'>
					<h2
						style={{display: "flex", width: "100%", justifyContent: "center"}}
						data-aos='fade-up'>
						INTERNATIONAL SERVICES
					</h2>{" "}
					<div className='left_items_wrapper'>
						<div className='discssn' data-aos='fade-up'>
							<h2>Import Service</h2>
							<p>
								We use the International Network Partners To Collect Shipments
								From Over 200 Countries Worldwide Door-To-Door. This Can Be Done
								Via Express, Economy Express Or Airfreight Services Based On The
								Weight Restrictions And Cost. It reduces down time equipment,
								gives you the option of payments by receiver at the point of
								delivery, and less dependent on foreign partners
							</p>
						</div>
						<div className='discssn' data-aos='fade-up'>
							<h2>Freight (Air Freight, Sea Freight and Land Freight)</h2>
							<p>
								FLAWLESS can ship your goods anywhere in the world. Our
								experienced team will guide your freight through customs points,
								providing local oversight at thousands of destinations around
								the world. Our tracking technology gives you real-time
								visibility of each shipment in transit.
							</p>
						</div>
						<div className='discssn' data-aos='fade-up'>
							<h2>Customs Duties Service</h2>
							<p>
								We are well known to be specialists in shipping, with broad
								knowledge and know-how of dealing with customs related issues .
								For your peace of mind, we provide a wide range of customs
								support for standard as well as non-routine customs-clearance
								processes. By making sure that clearance is a smooth and
								efficient process, we ensure your shipments arrive as quickly as
								possible, and leave you free to focus on your core business
								ideal for larger shipments, we work with the best airlines in
								the world to guarantee you safe and quick delivery, with full
								tracking visibility, customs clearance, expert handling of
								shipping and regulatory paperwork. Our air freight service is
								second to none.
							</p>
						</div>
						<div className='discssn' data-aos='fade-up'>
							<h2>International Express Service</h2>
							<p>
								Our international express service delivers time sensitive
								documents and parcels nationwide to over 200 countries . Time in
								transit is usually between 24 to 72 hours for consignments in
								multiples of 32kg or less.
							</p>
						</div>
						<div className='discssn' data-aos='fade-up'>
							<h2>International E-fulfilment</h2>
							<p>
								We also offer an end-to-end international e-fulfilment service
								including freight and customs clearance, warehousing, order
								processing, pick and pack, nationwide distribution services and
								returns management to overseas online retailers
							</p>
						</div>
					</div>
				</div>
				<div className='top_right'>
					<div className='card' data-aos='fade-up'>
						<ul>
							<h2>SERVICES</h2>
							<li>
								<Link to='/services/courier'>Courier</Link>
							</li>
							<li>
								<Link to='/services/logistics'>Logistics</Link>
							</li>
							<li>
								<Link to='/services/e-commerce'>E-commerce</Link>
							</li>
							<li>
								<Link to='/services/international'>International</Link>
							</li>
							<li>
								<Link to='/services/specialised-solution'>
									Specialised Solutions{" "}
								</Link>
							</li>
							<li>
								<Link to='/services/custom-solution'>Custom Solution</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='bottom'>
				<div className='cards'>
					<ul>
						<li data-aos='fade-up'>
							<CheckCircleOutlineRounded className='icon' />
							<h2>Our Vision</h2>
							<p>
								To achieve leadership in the World courier and logistics market
								by creating solutions that improve performances and enable its
								people and business partners.
							</p>
						</li>
						<li data-aos='fade-up'>
							<CheckCircleOutlineRounded className='icon' />
							<h2>Our Mission</h2>
							<p>
								To be the reference point of excellence for courier and
								logistics solutions with cross-efficient express deliveries to
								our clients in all businesses sectors.
							</p>
						</li>
						<li data-aos='fade-up'>
							<CheckCircleOutlineRounded className='icon' />
							<h2>Brand Value</h2>
							<p>
								Our values guide how we behave. our brand values are:
								innovation, customer centricity, Community, Excellence,
								Integrity, Respect and Commitment.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default International;
