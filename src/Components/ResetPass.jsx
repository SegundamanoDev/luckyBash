import React from "react";
import "./ResetPass.css";
import {useState} from "react";

const ResetPass = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<h2>Reset Password</h2>
				<div className='form_input_field'>
					<input
						type='text'
						name='email'
						id='email'
						placeholder='Username or Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default ResetPass;
