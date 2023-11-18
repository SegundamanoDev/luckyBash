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
					<p>
						Welcome to the Flawless Delivery Contact Us page – your gateway to
						seamless communication. We understand the importance of staying
						connected, and we're here to make it effortless for you to reach
						out. Have a question, a special request, or just want to say hello?
						Our dedicated customer support team is ready to assist you. Whether
						you prefer email, phone, or a quick message through our
						user-friendly contact form, we've got you covered. At Flawless
						Delivery, your inquiries are more than just messages; they're
						opportunities for us to enhance your experience. Our team is
						committed to providing timely and helpful responses, ensuring that
						your needs are met with precision and care. Feel free to reach out
						with any queries regarding your shipments, service inquiries, or
						general feedback. Your satisfaction is our priority, and we look
						forward to being of assistance. Thank you for choosing Flawless
						Delivery. Your feedback matters, and we're here to listen. Contact
						us today – because your convenience is our commitment.
					</p>
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
