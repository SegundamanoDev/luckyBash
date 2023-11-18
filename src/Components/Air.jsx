import React from "react";
import "./Air.css";
import airImg from "../assets/WhatsApp Image 2023-11-17 at 14.10.55_191aac1c.jpg";

const Air = () => {
	return (
		<div className='air-container'>
			<img src={airImg} alt='air-img' />
			<div className='air-content'>
				<h1>Air Freight</h1>
				<p>
					Embark on a journey of unparalleled speed and efficiency with our air
					freight services. Perfect for urgent shipments, air freight takes your
					cargo to new heights, connecting you to destinations worldwide.
					Experience the advantage of swift delivery, precise scheduling, and
					global reach. Our dedicated team ensures that your goods travel
					seamlessly through the skies, meeting tight deadlines and exceeding
					expectations. Choose air freight for a rapid and reliable shipping
					experience.
				</p>
			</div>
		</div>
	);
};

export default Air;
