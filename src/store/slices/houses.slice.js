import { createSlice } from "@reduxjs/toolkit";

const name = "HOUSES";
const housesSlice = createSlice({
	name,
	initialState: { houses: null },
	reducers: {
		SET_HOUSES: (state, { payload }) => {
			console.log(payload);
			state.houses = payload;
		},
		DELETE_HOUSE: (state, { payload }) => {
			state.houses = state.houses.filter((item) => item._id !== payload);
		},
		ADD_HOUSE: (state, { payload }) => {
			state.houses.push(payload);
		},
	},
});
export const { SET_HOUSES, DELETE_HOUSE, ADD_HOUSE } = housesSlice.actions;
export const HOUSES_STATE = (state) => state[name];
export default housesSlice.reducer;
