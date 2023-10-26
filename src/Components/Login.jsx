import React from "react";
import "./Login.css";
import {Link} from "react-router-dom";
import {useState} from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<h2>Login</h2>
				<div className='form_input_field'>
					<input
						type='text'
						name='username'
						id='username'
						placeholder='Username or Email'
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
				</div>
				<p>
					Forgot your password?{" "}
					<span>
						<Link to='/reset-password'>Reset Password</Link>
					</span>
				</p>
				<p>
					don't have an account?{" "}
					<span>
						<Link to='/register'>register</Link>
					</span>
				</p>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default Login;
