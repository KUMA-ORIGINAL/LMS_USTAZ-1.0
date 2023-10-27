import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    access: null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("user", JSON.stringify({
                access: action.payload.access
            })
            );
            state.accessToken = action.payload.access
        },
        logout: (state) => {
            localStorage.removeItem("user");
            state.access = null
        }
    }
})

export const selectAuth = (state) => state.auth;

export const {setUser, logout} = authSlice.actions;

export default authSlice.reducer;