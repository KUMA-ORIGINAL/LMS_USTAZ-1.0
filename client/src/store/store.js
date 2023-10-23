import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {authApi} from "./api/authApi";
import AuthReducer from "./reducers/auth/authReducer";
import {setupListeners} from "@reduxjs/toolkit/query";




export const rootReducer =  combineReducers({
    auth: AuthReducer,
    [authApi.reducerPath]:authApi.reducer,
})

const store = configureStore({

    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})

export default store;

setupListeners(store.dispatch);