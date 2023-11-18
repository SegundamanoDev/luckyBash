import React, {useEffect} from "react";
import "./Login.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {SignIn} from "../Redux/slices/userSlice";
import {auth, provider} from "./firebase";
import {signInWithPopup} from "firebase/auth";
import {toast} from "react-toastify";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const {error, loading, user, success} = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(
			SignIn({
				email,
				password,
			})
		);
	};

	useEffect(() => {
		if (user?._id) {
			navigate("/");
		}
	}, [user, navigate]);
	const signInWithGoogle = () => {
		signInWithPopup(auth, provider).then((result) => {
			console.log(result);
		});
	};
	return (
		<div className='container' data-aos='zoom-in'>
			<form onSubmit={handleSubmit}>
				<h2>Login</h2>
				<div className='form_input_field'>
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
				<button type='submit'>{loading ? <p>SENDING...</p> : "Login"}</button>
				<button onClick={signInWithGoogle}>Sign In with Google</button>
				{error && <p style={{color: "red"}}>{error}</p>}
			</form>
		</div>
	);
};

export default Login;
