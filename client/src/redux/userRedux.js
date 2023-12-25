// userSlice.js

import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true
		},
		loginSuccess: (state, action) => {
			state.isFetching = false
			state.currentUser = action.payload
			state.error = false
		},
		loginFailure: (state) => {
			state.isFetching = false
			state.error = true
		},
		logout: (state) => {
			// Reset state to initial values when logging out
			state.currentUser = null
			state.isFetching = false
			state.error = false
		},
	},
})

export const { loginStart, loginSuccess, loginFailure, logout } =
	userSlice.actions
export default userSlice.reducer
