import React from "react";
import "./Contact.css";
import {
	EmailRounded,
	LocationOnRounded,
	PhoneEnabled,
} from "@mui/icons-material";

const Contact = () => {
	return (
		<div className='contact_container'>
			<div className='contact_top' data-aos='zoom-in'>
				<h2>WHO WE ARE</h2>
				<h2>CONTACT US</h2>
			</div>
			<div className='contact_bottom'>
				<div className='left' data-aos='fade-up'>
					<h2>GET IN TOUCH WITH US</h2>
					<p>To get in touch with FLAWLESS please Call or Email us</p>
				</div>
				<div className='right' data-aos='fade-up'>
					<form>
						<input type='text' name='' id='' placeholder='Enter your name' />
						<input type='email' name='' id='' placeholder='Enter your email' />
						<input
							type='text'
							name=''
							id=''
							placeholder='Whats your subject?'
						/>
						<textarea
							name=''
							id=''
							cols='30'
							rows='10'
							placeholder='Please enter your message'>
							Text
						</textarea>
						<button type='submit'>Send</button>
					</form>
				</div>
			</div>
			<div className='contact_info'>
				<div className='contact_info_wrapper' data-aos='fade-up'>
					<LocationOnRounded className='icon' />
					<h2>ADDRESS</h2>
					<h3>42 MM Way Off Airport Road, Ikeja, Lagos, Nigeria.</h3>
				</div>
				<div className='contact_info_wrapper' data-aos='fade-up'>
					<PhoneEnabled className='icon' />
					<h2>TELEPHONE</h2>
					<h3>+2349052890540</h3>
					<h3>+2349052890540</h3>
					<h3>+2349052890540</h3>
				</div>
				<div className='contact_info_wrapper' data-aos='fade-up'>
					<EmailRounded className='icon' />
					<h2>EMAIL</h2>
					<h3>akitikorisegun2031@gmail.com</h3>
					<h3>akitikorisegun2031@gmail.com</h3>
					<h3>akitikorisegun2031@gmail.com</h3>
				</div>
			</div>
		</div>
	);
};

export default Contact;
