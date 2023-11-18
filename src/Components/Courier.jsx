import React from "react";
import "./Courier.css";
import {Link} from "react-router-dom";
import {CheckCircleOutlineRounded} from "@mui/icons-material";

const Courier = () => {
	return (
		<div className='courier_container'>
			<div className='courier_top' data-aos='fade-up'>
				<h2>WHO WE ARE</h2>
				<h2>COURIER</h2>
			</div>
			<div className='left_wrapper'>
				<div className='left_top'>
					<div className='discssn' data-aos='fade-up'>
						<p>
							Welcome to Flawless Delivery, where reliability meets efficiency,
							and your packages find their express journey to their destination.
							As a leading courier service, we take pride in delivering not just
							parcels but peace of mind. At Flawless Delivery, we've mastered
							the art of seamless logistics. Whether it's a time-sensitive
							document or a special delivery, our dedicated team ensures your
							packages are handled with utmost care from pick-up to drop-off.
							Our commitment goes beyond just delivering packages; it's about
							delivering trust. With cutting-edge technology, real-time
							tracking, and a network that spans far and wide, we bring you a
							courier experience that's as dependable as it is efficient.
							Explore our range of services tailored to meet your shipping
							needs. From local deliveries to international shipments, we've got
							the solution to ensure your packages reach their destination on
							time and in perfect condition. Choose Flawless Delivery for a
							courier service that understands the value of your shipments.
							We're not just in the business of logistics; we're in the business
							of building lasting connections. Experience the difference with
							Flawless Delivery – where every delivery is a promise kept.
						</p>
					</div>

					<div className='discssn' data-aos='fade-up'>
						<h2>Domestic Express Service:</h2>
						<p>
							Our domestic express service delivers time sensitive documents and
							parcels nation wild, transit is usually between 24 to 72 hours for
							consignments up to 500kg policies for all types of shipments
						</p>
					</div>
				</div>
				<div className='top_right' data-aos='fade-up'>
					<div className='card'>
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

export default Courier;
