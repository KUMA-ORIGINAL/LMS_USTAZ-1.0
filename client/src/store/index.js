import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {authApi} from "../http/auth.api";
import AuthReducer from "../slices/authSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import { courseApi } from "../http/course.api";


export const rootReducer =  combineReducers({
    auth: AuthReducer,
    [authApi.reducerPath]:authApi.reducer,
    [courseApi.reducerPath]:courseApi.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, courseApi.middleware),
})

export default store;
setupListeners(store.dispatch);