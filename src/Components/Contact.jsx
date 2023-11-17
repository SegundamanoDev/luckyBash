import React, {useRef} from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import {
	EmailRounded,
	LocationOnRounded,
	PhoneEnabled,
} from "@mui/icons-material";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_7roxbv5",
				"template_fqf5dhq",
				form.current,
				"Awcby3YTP2EKZudJJ"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
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
					<form ref={form} onSubmit={sendEmail}>
						<input type='text' placeholder='Enter your name' name='user_name' />
						<input
							type='email'
							placeholder='Enter your email'
							name='user_email'
						/>
						<input
							type='text'
							placeholder='Whats your subject?'
							name='subject'
						/>
						<textarea
							cols='30'
							rows='10'
							name='message'
							placeholder='Please enter your message'>
							Text
						</textarea>
						<button type='submit'>Send</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
