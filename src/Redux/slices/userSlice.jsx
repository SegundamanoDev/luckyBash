import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";

export const SignUp = createAsyncThunk(
	"user/registerUser",
	async (userData, {rejectWithValue}) => {
		try {
			const headers = {
				headers: {
					Authorization: `Bearer ${
						localStorage.getItem("token") ? localStorage.getItem("token") : null
					}`,
					"Content-Type": "application/json",
				},
			};
			const response = await axios.post(
				"http://localhost:3000/register",
				JSON.stringify(userData),
				headers
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const SignIn = createAsyncThunk(
	"user/loginUser",
	async (userData, {rejectWithValue}) => {
		try {
			const headers = {
				headers: {
					Authorization: `Bearer ${
						localStorage.getItem("token") ? localStorage.getItem("token") : null
					}`,
					"Content-Type": "application/json",
				},
			};
			const response = await axios.post(
				"http://localhost:3000/login",
				JSON.stringify(userData),
				headers
			);
			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(error.response.data.message);
		}
	}
);

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: localStorage.getItem("user")
			? JSON.parse(localStorage.getItem("user"))
			: null,
		success: false,
		loading: false,
		token: localStorage.getItem("token") ? localStorage.getItem("token") : [],
		error: null,
	},

	reducers: {
		logOut: (state) => {
			(state.user = null), (state.loading = false), (state.error = null);
			state.success = false;
			state.token = [];
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			toast.success("logged out successful", {position: "top-left"});
		},
	},
	extraReducers: (builder) => {
		builder.addCase(SignUp.pending, (state) => {
			state.loading = true;
			state.user = null;
			state.error = null;
			state.success = false;
		});
		builder.addCase(SignUp.fulfilled, (state, action) => {
			state.success = true;
			state.user = null;
			state.loading = false;
			state.error = null;
			toast.success(action.payload.data.message, {position: "top-left"});
		});
		builder.addCase(SignUp.rejected, (state, action) => {
			state.error = action.payload;
			state.user = null;
			state.loading = false;
			state.success = false;
			toast.error(state.error, {position: "top-left"});
		});

		builder.addCase(SignIn.pending, (state) => {
			state.loading = true;
			state.success = false;
			state.user = null;
			state.error = null;
			state.token = [];
		});
		builder.addCase(SignIn.fulfilled, (state, action) => {
			state.user = action.payload?.user;
			state.success = true;
			state.loading = false;
			state.error = null;
			state.token = action.payload?.token;
			localStorage.setItem("user", JSON.stringify(action.payload?.user));
			localStorage.setItem("token", action.payload?.token);
			toast.success("login success", {position: "top-left"});
		});
		builder.addCase(SignIn.rejected, (state, action) => {
			state.user = null;
			state.loading = false;
			state.success = false;
			state.error = action.payload;
			state.token = [];
			toast.error(action.payload, {position: "top-left"});
		});
	},
});

export const {logOut} = userSlice.actions;
export default userSlice.reducer;
