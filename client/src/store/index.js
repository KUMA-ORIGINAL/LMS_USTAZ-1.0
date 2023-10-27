import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {authApi} from "../http/auth.api";
import AuthReducer from "../slices/authSlice";
import {setupListeners} from "@reduxjs/toolkit/query";


export const rootReducer =  combineReducers({
    auth: AuthReducer,
    [authApi.reducerPath]:authApi.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})

export default store;
setupListeners(store.dispatch);