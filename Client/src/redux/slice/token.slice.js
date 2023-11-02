import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: ''
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setAccessToken: (state, { payload }) => {
            // state.accessToken = action.payload.accessToken;
            const nextState = {
                ...state,
                ...payload
            }
            return nextState
        }
    }
});

export const { setAccessToken } = tokenSlice.actions;

export default tokenSlice.reducer;