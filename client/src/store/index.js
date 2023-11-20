import {configureStore, combineReducers} from "@reduxjs/toolkit";
import AuthReducer from "../slices/authSlice";
import {setupListeners} from "@reduxjs/toolkit/query";
import { courseApi } from "../http/course.api";


export const rootReducer =  combineReducers({
    auth: AuthReducer,
    [courseApi.reducerPath]:courseApi.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(courseApi.middleware),
})

export default store;
setupListeners(store.dispatch);