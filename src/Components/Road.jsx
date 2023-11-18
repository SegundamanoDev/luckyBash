import React from "react";
import "./Road.css";
import roadImg from "../assets/WhatsApp Image 2023-11-17 at 14.10.55_f15f8406.jpg";

const Road = () => {
	return (
		<div className='road-container'>
			<img src={roadImg} alt='air-img' />
			<div className='road-content'>
				<h1>Road Freight</h1>
				<p>
					Explore the versatility of our road freight solutions as we navigate
					the highways to deliver excellence to your doorstep. Whether your
					cargo needs a regional or international route, our road freight
					services provide a flexible and cost-effective transportation
					solution. Enjoy the convenience of door-to-door deliveries, optimized
					routes, and a vast network of trusted carriers. We prioritize
					efficiency and reliability, ensuring that your shipments reach their
					destination securely and punctually. Choose road freight for a
					streamlined and dependable shipping experience.
				</p>
			</div>
		</div>
	);
};

export default Road;
