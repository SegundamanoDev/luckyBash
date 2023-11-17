import React from "react";
import "./Commerce.css";
import {CheckCircleOutlineRounded} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Commerce = () => {
	return (
		<div className='commerce_container'>
			<div className='commerce_top' data-aos='zoom-in'>
				<h2>WHO WE ARE</h2>
				<h2>E-COMMERCE</h2>
			</div>
			<div className='left_wrapper'>
				<div className='left_top'>
					<div className='group_item' data-aos='fade-up'>
						<h2>E-Commerce Services</h2>
						<h3>e platforms all across the country.</h3>
					</div>
					<h3 data-aos='fade-up'>
						Our e-Commerce services can save you time and money in an
						increasingly competitive and fast changing business landscape.
					</h3>

					<div className='discssn' data-aos='fade-up'>
						<p data-aos='fade-up'>
							Our vast investment in technology and integration with the whole
							e-commerce supply chain makes us a reliable partner for online
							businesses. Furthermore, we are a major delivery and logistics
							support provider to over 500 stand-alone online merchants and
							major E-commerce platforms all across the country. Our service
							range includes the following:
						</p>

						<div className='discssn_II'>
							<h3 data-aos='fade-up'>Last Mile Deliveries</h3>
							<h3 data-aos='fade-up'>
								Managed (Manage) Drop-off and Collection services
							</h3>
							<h3 data-aos='fade-up'>Warehousing, fulfillment services</h3>
							<h3 data-aos='fade-up'>Reverse Logistics & Returns</h3>
							<h3 data-aos='fade-up'>Real-Time Statuses</h3>
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

export default Commerce;
