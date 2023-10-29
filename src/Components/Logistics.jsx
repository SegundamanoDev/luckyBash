import React from "react";
import "./Logistics.css";
import {Link} from "react-router-dom";
import {CheckCircleOutlineRounded} from "@mui/icons-material";

const Logistics = () => {
	return (
		<div className='logistics_container'>
			<div className='logistics_top' data-aos='zoom-in'>
				<h2>WHO WE ARE</h2>
				<h2>LOGISTICS</h2>
			</div>
			<div className='left_wrapper'>
				<div className='left_top'>
					<div className='group_item' data-aos='fade-up'>
						<h2>Logistics Service</h2>
						<p>Get great delivery value at a reduced cost.</p>
					</div>

					<p data-aos='fade-up'>
						Our service offering range from as simple as allocating our Trucks
						or Vans with the drivers on uniform.
					</p>

					<div className='discssn' data-aos='fade-up'>
						<h2>Domestic Economy Service:</h2>
						<p>
							Our Domestics Economy Service has been specifically designed to
							suit both individual and corporate organization that require
							efficient, timely and safe delivery shipments that may not
							necessarily require express movements Although not as fast as our
							Express Delivery Service, it is still very time definite with
							transit time of 3-5 working days. this service is flexible and
							enable clients to get great Delivery value at a reduced cost. Its
							uniquely and strategically outline to serve clients in major
							industries like Telecommunication, Energy, Pharmaceuticals,
							Manufacturing and such likes.
						</p>
					</div>

					<div className='discssn' data-aos='fade-up'>
						<h2>Truck Load Service:</h2>
						<p>
							A ground haulage service ranging from 1 to 30 tones to any cities,
							this service has capacities for large and voluminous
							transportation of products and materials and is covered by
							Goods-in-Transit insurance up to #400m/annum.
						</p>
					</div>
					<div className='discssn' data-aos='fade-up'>
						<h2>Dedicated Services:</h2>
						<p>
							FLAWLESS Dedicated Services provide a broad spectrum of contact
							Dedicated Logistics Services. Our service offerings range from as
							simple as allocating our Trucks and Vans with drivers in uniform.
							we feel we are doing our jobs well when our employees can
							harmoniously assimilate into your organization and anyone outside
							the organization would recognized our employees as one of yours.
							We guarantee you that this will not only save client's cost it
							will also improve business process
						</p>
					</div>
				</div>
				<div className='top_right'>
					<div className='card'>
						<ul data-aos='fade-up'>
							<h2 data-aos='zoom-in'>SERVICES</h2>
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

export default Logistics;
