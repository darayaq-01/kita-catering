import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isLoading: false,
    error: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserPending: (state, action) => {
            state.isLoading = true;
        },
        getUserSuccess: (state, { payload }) => {
            state.user = payload;
            state.isLoading = false;
            state.error = "";
            /*  state.push({ firstName, isLoading: false, error: "" }) */
        },
        getUserFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
    },
});

export const {
    getUserSuccess,
    getUserFail,
} = userSlice.actions;

export default userSlice.reducer;