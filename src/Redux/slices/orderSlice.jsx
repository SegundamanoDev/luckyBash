import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";

export const CreateOrder = createAsyncThunk(
	"order/create",
	async (orderData, {rejectWithValue}) => {
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
				"http://localhost:3000/create-order",
				JSON.stringify(orderData),
				headers
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data.message);
		}
	}
);

export const GetOrders = createAsyncThunk(
	"order/getOrders",
	async (_, {rejectWithValue}) => {
		try {
			const headers = {
				headers: {
					Authorization: `Bearer ${
						localStorage.getItem("token") ? localStorage.getItem("token") : null
					}`,
					"Content-Type": "application/json",
				},
			};
			const response = await axios.get(`http://localhost:3000/orders`, headers);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data.message);
		}
	}
);

export const GetOrder = createAsyncThunk(
	"order/singleOrder",
	async (id, {rejectWithValue}) => {
		try {
			const headers = {
				headers: {
					Authorization: `Bearer ${
						localStorage.getItem("token") ? localStorage.getItem("token") : null
					}`,
					"Content-Type": "application/json",
				},
			};
			const response = await axios.get(
				`http://localhost:3000/order/${id}`,
				headers
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data.message);
		}
	}
);

export const UpdateOrder = createAsyncThunk(
	"order/updateOrder",
	async (formData, {rejectWithValue}) => {
		try {
			const headers = {
				headers: {
					Authorization: `Bearer ${
						localStorage.getItem("token") ? localStorage.getItem("token") : null
					}`,
					"Content-Type": "application/json",
				},
			};
			const response = await axios.put(
				`http://localhost:3000/update-order/${formData.id}`,
				JSON.stringify(formData.body),
				headers
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data.message);
		}
	}
);
export const FindOrder = createAsyncThunk(
	"order/findTracking",
	async (refNumber, {rejectWithValue}) => {
		try {
			const headers = {
				headers: {
					Authorization: `Bearer ${
						localStorage.getItem("token") ? localStorage.getItem("token") : null
					}`,
					"Content-Type": "application/json",
				},
			};
			const response = await axios.get(
				`http://localhost:3000/track-order/${refNumber}`,
				headers
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data.message);
		}
	}
);
export const DeleteOrder = createAsyncThunk(
	"order/deleteTracking",
	async (id, {rejectWithValue}) => {
		try {
			const headers = {
				headers: {
					Authorization: `Bearer ${
						localStorage.getItem("token") ? localStorage.getItem("token") : null
					}`,
					"Content-Type": "application/json",
				},
			};
			const response = await axios.delete(
				`http://localhost:3000/delete-order/${id}`,
				headers
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data.message);
		}
	}
);

const orderSlice = createSlice({
	name: "order",
	initialState: {
		orders: [],
		order: {},
		success: false,
		loading: false,
		error: null,
	},

	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(CreateOrder.pending, (state) => {
			state.loading = true;
			(state.success = false), (state.orders = []);
			state.order = {};
			state.error = null;
		});
		builder.addCase(CreateOrder.fulfilled, (state, action) => {
			state.orders = action.payload.orders;
			state.success = true;
			toast.success(action.payload.message, {position: "top-left"});
			state.loading = false;
			state.error = null;
		});
		builder.addCase(CreateOrder.rejected, (state, action) => {
			state.loading = false;
			state.success = false;
			state.orders = null;
			state.error = action.payload;
			toast.error(state.error, {position: "top-left"});
		});

		builder.addCase(GetOrders.pending, (state) => {
			state.pending = true;
			state.success = false;
			state.orders = [];
			state.order = {};
			state.error = null;
		});
		builder.addCase(GetOrders.fulfilled, (state, action) => {
			state.pending = false;
			state.success = true;
			state.orders = action.payload;
			state.order = {};
			state.error = null;
		});
		builder.addCase(GetOrders.rejected, (state, action) => {
			state.pending = false;
			state.success = false;
			state.orders = [];
			state.order = {};
			state.error = action.payload;
			toast.error(state.error, {position: "top-left"});
		});

		builder.addCase(GetOrder.pending, (state) => {
			state.pending = true;
			state.success = false;
			state.orders = [];
			state.order = {};
			state.error = null;
		});
		builder.addCase(GetOrder.fulfilled, (state, action) => {
			state.pending = false;
			state.orders = [];
			state.success = true;
			state.order = action.payload;
			state.error = null;
		});
		builder.addCase(GetOrder.rejected, (state, action) => {
			state.pending = false;
			state.success = false;
			state.orders = [];
			state.order = {};
			state.error = action.payload;
			toast.error(state.error, {position: "top-left"});
		});

		builder.addCase(UpdateOrder.pending, (state) => {
			state.pending = true;
			state.success = false;
			state.orders = [];
			state.order = {};
			state.error = null;
		});
		builder.addCase(UpdateOrder.fulfilled, (state, action) => {
			state.pending = false;
			state.order = action.payload;
			state.success = true;
			state.error = null;
			toast.success("order updated", {position: "top-left"});
		});
		builder.addCase(UpdateOrder.rejected, (state, action) => {
			state.pending = false;
			state.success = false;
			state.orders = [];
			state.order = {};
			state.error = action.payload;
			toast.error(state.error, {position: "top-left"});
		});
		builder.addCase(FindOrder.pending, (state) => {
			state.pending = true;
			state.success = false;
			state.orders = [];
			state.order = {};
			state.error = null;
		});
		builder.addCase(FindOrder.fulfilled, (state, action) => {
			state.pending = false;
			state.order = action.payload;
			state.success = true;
			state.orders = [];
			state.error = null;
		});
		builder.addCase(FindOrder.rejected, (state, action) => {
			state.pending = false;
			state.success = false;
			state.orders = [];
			state.order = {};
			state.error = action.payload;
			toast.error(action.payload, {position: "top-left"});
		});
		builder.addCase(DeleteOrder.pending, (state) => {
			state.pending = true;
			state.success = false;
			state.orders = null;
			state.error = null;
		});
		builder.addCase(DeleteOrder.fulfilled, (state, action) => {
			state.pending = false;
			state.success = true;
			state.error = null;
			toast.success("order has been deleted", {position: "top-left"});
		});
		builder.addCase(DeleteOrder.rejected, (state, action) => {
			state.pending = false;
			state.success = false;
			state.error = action.payload;
			toast.error(state.error, {position: "top-left"});
		});
	},
});

export default orderSlice.reducer;
