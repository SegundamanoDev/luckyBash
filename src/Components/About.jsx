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
				<h2 data-aos='fade-up'>
					Qualified service and committed employees. <br /> How do we do it?
				</h2>
				<h3 data-aos='fade-up'>
					FLAWLESS is a provider of end-to-end logistics solutions to businesses
					and institutions Across the Globe. We are currently among the top 5
					logistics provider in the world, operating from over 50 Countries
				</h3>
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
			<div className='team'>
				<h2 data-aos='fade-up'>FLAWLESS TEAM</h2>
				<h3 data-aos='fade-up'>Meet the FLAWLESS team</h3>
				<div className='team_info'>
					<ul>
						<li data-aos='fade-up'>
							{/* <img src={segunII} alt={segunII} /> */}
							<div className='desc'>
								<p>MANAGING DIRECTOR</p>
								<h3>AKITIKORI SEGUN</h3>
								<button>CONTACT</button>
							</div>
						</li>

						<li data-aos='fade-up'>
							{/* <img src={austin} alt={austin} /> */}
							<div className='desc'>
								<p>MANAGING DIRECTOR</p>
								<h3>AKITIKORI SEGUN</h3>
								<button>CONTACT</button>
							</div>
						</li>
						<li data-aos='fade-up'>
							{/* <img src={bola} alt={bola} /> */}
							<div className='desc'>
								<p>MANAGING DIRECTOR</p>
								<h3>AKITIKORI SEGUN</h3>
								<button>CONTACT</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
