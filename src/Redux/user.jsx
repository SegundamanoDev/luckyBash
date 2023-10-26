import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
	"user/signup",
	async (userData, {rejectWithValue}) => {
		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const response = await axios.post(
				"http://localhost:3000/signup",
				JSON.stringify(userData),
				config
			);
			return response.data;
		} catch (error) {
			rejectWithValue(error.response.data);
		}
	}
);

export const SignInUser = createAsyncThunk(
	"user/signin",
	async (userData, {rejectWithValue}) => {
		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const response = await axios.post(
				"http://localhost:3000/signin",
				JSON.stringify(userData),
				config
			);
			return response.data;
		} catch (error) {
			rejectWithValue(error.response.data);
		}
	}
);

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		isLoading: false,
		error: null,
	},
	reducers: {
		logOut: (state) => {
			state.isAuthenticated = false;
			state.user = localStorage.removeItem("user");
			state.token = [];
			localStorage.removeItem("token");
		},
	},
	extraReducers: {
		extraReducers: (builder) => {
			builder.addCase(signUp.pending, (state) => {
				state.pending = true;
				state.user = null;
				state.error = null;
				state.isAuthenticated = false;
			});
			builder.addCase(signUp.fulfilled, (state, action) => {
				state.pending = false;
				state.user = action.payload;
				state.isAuthenticated = true;
				state.error = null;
			});
			builder.addCase(signUp.rejected, (state, action) => {
				state.pending = false;
				state.user = null;
				state.isAuthenticated = false;
				state.error = action.payload;
			});

			builder.addCase(SignInUser.pending, (state) => {
				state.pending = true;
				state.user = null;
				state.error = null;
				state.isAuthenticated = false;
				state.token = [];
			});
			builder.addCase(SignInUser.fulfilled, (state, action) => {
				state.pending = false;
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isAuthenticated = true;
				state.error = null;
				localStorage.setItem("user", JSON.stringify(state.user));
				localStorage.setItem("token", JSON.stringify(state.token));
			});
			builder.addCase(SignInUser.rejected, (state, action) => {
				state.pending = false;
				state.user = null;
				state.isAuthenticated = false;
				state.token = [];
				state.error = action.payload;
			});
		},
	},
});

export const {logOut} = userSlice.actions;
export default userSlice;
