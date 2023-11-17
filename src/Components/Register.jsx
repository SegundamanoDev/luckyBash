import React, {useEffect} from "react";
import {useState} from "react";
import "./Register.css";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {SignUp} from "../Redux/slices/userSlice";
import {toast} from "react-toastify";

const Register = () => {
	const dispatch = useDispatch();
	const {user, loading, error, success} = useSelector((state) => state.user);
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [image, setImage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(
			SignUp({
				username,
				email,
				password,
				photo: image,
			})
		);
	};

	if (success) {
		navigate("/login");
	}
	useEffect(() => {
		if (user?._id) {
			navigate("/");
		}
	}, [navigate, user]);

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
			setImage(base64String);
		};
	};
	return (
		<div className='container' data-aos='zoom-in'>
			<form onSubmit={handleSubmit}>
				<h2>Register</h2>
				<div className='form_input_field'>
					<input
						type='text'
						placeholder='Username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type='file'
						accept='image/*'
						placeholder='image'
						onChange={handleFileChange}
					/>
				</div>
				<p>
					Already have an account?{" "}
					<span>
						<Link to='/login'>Login</Link>
					</span>
				</p>
				<button type='submit'>
					{loading ? <p>SENDING...</p> : "Register"}
				</button>
				<p>Or</p>
				<button>Sign Up with Google</button>

				{error && <p style={{color: "red"}}>{error}</p>}
			</form>
		</div>
	);
};

export default Register;
