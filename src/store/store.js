import { configureStore } from "@reduxjs/toolkit";
import { HOUSES_SLICE } from "./index";

const store = configureStore({
	reducer: {
		HOUSES: HOUSES_SLICE,
	},
});
export default store;
