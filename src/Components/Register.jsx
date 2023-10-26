import React from "react";
import {useState} from "react";
import "./Register.css";
import {Link} from "react-router-dom";

const Register = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [photo, setPhoto] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			convertToBase64(file);
		}
	};
	const convertToBase64 = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = (e) => {
			const base64String = e.target.result;
			setPhoto(base64String);
		};
	};
	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<h2>Register</h2>
				<div className='form_input_field'>
					<input
						type='text'
						name='firstName'
						id='firstName'
						placeholder='Firstname'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<input
						type='text'
						name='lastName'
						id='lastName'
						placeholder='LastName'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
					<input
						type='text'
						name='Email'
						id='Email'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='text'
						name='password'
						id='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type='file'
						accept='image/*'
						name='photo'
						id='photo'
						placeholder='Photo'
						onChange={handleFileChange}
					/>
				</div>
				<p>
					Already have an account?{" "}
					<span>
						<Link to='/login'>Login</Link>
					</span>
				</p>
				<button type='submit'>Register</button>
				<p>Or</p>
				<button>Sign Up with Google</button>
			</form>
		</div>
	);
};

export default Register;
