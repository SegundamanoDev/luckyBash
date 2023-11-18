import React from "react";
import "./About.css";
import {CheckCircleOutlineRounded} from "@mui/icons-material";
const About = () => {
	return (
		<div className='about_container'>
			<div className='about_top' data-aos='zoom-in'>
				<h2>WHO WE ARE</h2>
				<h2>ABOUT US</h2>
			</div>
			<section>
				<p>
					Welcome to Flawless Logistics's About Us page, where our journey
					unfolds beyond the parcels we deliver. Established with a commitment
					to redefine courier services, we take pride in being more than just a
					logistical solution. At Flawless Logistics, we understand that behind
					every package is a story – a connection waiting to be strengthened.
					Our foundation rests on reliability, integrity, and a passion for
					seamless deliveries. With years of experience, we've cultivated a
					culture that values precision in every shipment and places customer
					satisfaction at its core. Our dedicated team, comprised of industry
					experts, ensures that your parcels are handled with the utmost care
					and efficiency. Beyond the numbers, we are driven by the relationships
					we build. It's not just about delivering packages; it's about
					delivering promises. We embrace innovation to stay ahead in an
					ever-evolving industry, utilizing cutting-edge technology to provide
					real-time tracking, streamlined processes, and a level of transparency
					that instills confidence in our clientele. Flawless Logistics is more
					than a courier service – it's a commitment to excellence. As we
					continue to grow, our focus remains on creating a seamless experience
					for our customers, fostering trust, and making every delivery more
					than just a transaction. Thank you for choosing Flawless Logistics –
					where every parcel carries our dedication, and every delivery is a
					testament to our unwavering commitment to your satisfaction.
				</p>
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
			</section>
		</div>
	);
};

export default About;
