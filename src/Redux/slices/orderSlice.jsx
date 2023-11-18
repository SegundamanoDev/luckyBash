import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-toastify";

const headers = {
	headers: {
		Authorization: `Bearer ${
			localStorage.getItem("token") ? localStorage.getItem("token") : null
		}`,
		"Content-Type": "application/json",
	},
};

export const CreateOrder = createAsyncThunk(
	"order/create",
	async (orderData, {rejectWithValue}) => {
		try {
			const response = await axios.post(
				"http://shiny-habitual-pony.glitch.me/create-order",
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
	"order/get",
	async (orderData, {rejectWithValue}) => {
		try {
			const response = await axios.get(
				"http://shiny-habitual-pony.glitch.me/orders",
				JSON.stringify(orderData),
				headers
			);
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
			const response = await axios.get(
				`http://shiny-habitual-pony.glitch.me/order/${id}`,
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
			const response = await axios.put(
				`http://shiny-habitual-pony.glitch.me/update-order/${formData.id}`,
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
			const response = await axios.get(
				`http://shiny-habitual-pony.glitch.me/track-order/${refNumber}`,
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
			const response = await axios.delete(
				`http://shiny-habitual-pony.glitch.me/delete-order/${id}`,
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
			state.pending = true;
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
