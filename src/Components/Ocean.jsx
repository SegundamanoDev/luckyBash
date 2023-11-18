import React from "react";
import "./Ocean.css";
import oceanImg from "../assets/WhatsApp Image 2023-11-17 at 14.10.55_b4fc90e2.jpg";

const Ocean = () => {
	return (
		<div className='ocean-container'>
			<img src={oceanImg} alt='air-img' />
			<div className='ocean-content'>
				<h1>Ocean Freight</h1>
				<p>
					Set sail with confidence as our ocean freight services offer a robust
					solution for transporting large volumes of cargo across vast
					distances. Embrace the stability and affordability of ocean freight,
					ideal for international shipping needs. With established partnerships
					and expert logistics, we ensure a smooth journey from port to port.
					Benefit from cost-effective shipping options, flexible scheduling, and
					reliable transit times. Trust in the dependability of our ocean
					freight services for your global shipping requirements, ensuring your
					cargo reaches its destination securely and economically
				</p>
			</div>
		</div>
	);
};

export default Ocean;
