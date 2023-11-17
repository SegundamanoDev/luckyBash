import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import orderSlice from "./slices/orderSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
	reducer: {
		user: userSlice,
		order: orderSlice,
	},
	middleware: [thunk],
});
